
import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorMiddleware from './middleware/error.middleware.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Error handling middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});