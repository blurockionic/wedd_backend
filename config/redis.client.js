import redis from 'redis';

class RedisClient {
  constructor() {
    this.maxRetries = 5;
    this.retryInterval = 2000;
    this.isConnected = false;
    this.client = null;
    this.connectToRedis();
  }

  async connectToRedis(retries = this.maxRetries) {
    console.log(`Connecting to Redis...`);
    this.client = redis.createClient({
      url: 'redis://localhost:6379', // Update as needed
    });

    this.client.on('error', (err) => {
      console.error('Redis Error:', err.message);
      this.isConnected = false;
    });

    this.client.on('end', () => {
      console.log('Redis connection closed.');
      this.isConnected = false;
    });

    try {
      await this.client.connect();
      this.isConnected = true;
      console.log('Connected to Redis.');
    } catch (err) {
      console.error(
        `Redis connection failed. Retrying in ${this.retryInterval / 1000} seconds...`
      );

      if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.retryInterval));
        await this.connectToRedis(retries - 1);
      } else {
        console.error('Could not connect to Redis after multiple attempts.');
      }
    }
  }

  async setValue(key, value, ttl) {
    if (!this.isConnected) {
      console.warn('Redis is not connected. Cannot set value.');
      return null;
    }

    try {
      const data = typeof value === 'object' ? JSON.stringify(value) : value;
      await this.client.set(key, data, { EX: ttl });
      console.log(`[setValue] Key: ${key}`);
    } catch (error) {
      console.error('Error setting value in Redis:', error.message);
      return null;
    }
  }

  async getValue(key) {
    if (!this.isConnected) {
      console.warn('Redis is not connected. Cannot get value.');
      return null;
    }

    try {
      const data = await this.client.get(key);
      try {
        return data ? JSON.parse(data) : null;
      } catch {
        return data; // Return raw string if not JSON
      }
    } catch (error) {
      console.error('Error getting value from Redis:', error.message);
      return null;
    }
  }

  async deleteKey(key) {
    if (!this.isConnected) {
      console.warn('Redis is not connected. Cannot delete key.');
      return null;
    }

    try {
      const result = await this.client.del(key);
      if (result === 1) {
        console.log(`Deleted Key: ${key}`);
      } else {
        console.log(`Key not found: ${key}`);
      }
      return result;
    } catch (error) {
      console.error('Error deleting key in Redis:', error.message);
      return null;
    }
  }

  async disconnect() {
    if (this.client) {
      try {
        await this.client.quit();
        console.log('Disconnected from Redis.');
      } catch (error) {
        console.error('Error disconnecting from Redis:', error.message);
      }
    }
  }
}

const redisClient = new RedisClient();

process.on('SIGINT', async () => {
  console.log('Shutting down...');
  await redisClient.disconnect();
  process.exit(0);
});

export default redisClient;
