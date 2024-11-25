import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error.middleware.js';
import prismaServiceMongo from './config/prisma.mongo.service.js';
import prismaService from './config/prisma.postgre.service.js';
import cluster from 'cluster';
import os from 'os';
import routes from './routes/routes.js';
import morganLogger from './middleware/log.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const numCPUs = os.cpus().length;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morganLogger)

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'Healthy' });
});

if (cluster.isPrimary) {
    console.log(`Primary process PID: ${process.pid}`);

    // Fork workers based on the number of CPUs
    for (let i = 0; i < 2; i++) {
        cluster.fork();
    }

    // Restart a worker if it crashes
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Restarting a new worker...`);
        cluster.fork();
    });
} else {
    // Each worker connects to the databases independently
    (async () => {
        try {
            await prismaService.connect();
            await prismaServiceMongo.connect();
            console.log(`Worker ${process.pid} connected to databases`);
        } catch (error) {
            console.error(`Worker ${process.pid} failed to connect to databases`, error);
            process.exit(1);
        }
    })();

    // Define routes
    app.use('/api/v1',routes);

    // Error handling middleware
    app.use(errorMiddleware);

    // Start server on each worker
    app.listen(PORT, () => {
        console.log(`Worker ${process.pid} is listening on http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
        console.log(`Worker ${process.pid} is shutting down gracefully`);
        try {
            await prismaService.disconnect();
            await prismaServiceMongo.disconnect();
            console.log(`Worker ${process.pid} disconnected from databases`);
        } catch (error) {
            console.error(`Error during disconnection in worker ${process.pid}`, error);
        }
        process.exit(0);
    });
}

  