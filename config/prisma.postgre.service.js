import  {PrismaClient}  from '../prisma/generated/postgres/index.js';

class PrismaService {
  constructor() {
    this.client = new PrismaClient();
  }

  async connect() {
    try {
      await this.client.$connect();
      console.log('Connected to PostgreSQL with Prisma');
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.client.$disconnect();
      console.log('Disconnected from PostgreSQL');
    } catch (error) {
      console.error('Error disconnecting from PostgreSQL:', error);
      throw error;
    }
  }
}

const prismaService = new PrismaService();
export default prismaService;
