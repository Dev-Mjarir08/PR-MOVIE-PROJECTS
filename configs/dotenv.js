import dotenv from 'dotenv';

dotenv.config();

export const env = {
    PORT: process.env.PORT || 8081,
    MONGO_URL: process.env.MONGO_URL
}
