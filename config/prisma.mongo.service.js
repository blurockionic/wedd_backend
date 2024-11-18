import  {PrismaClient}  from '../prisma/generated/mongo/index.js';

class PrismaServiceMongo {
  constructor() {
    this.client = new PrismaClient();
  }

  async connect() {
    try {
      await this.client.$connect();
      console.log('Connected to MongoDB with Prisma');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.client.$disconnect();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
}

const prismaServiceMongo = new PrismaServiceMongo();

export default prismaServiceMongo;
