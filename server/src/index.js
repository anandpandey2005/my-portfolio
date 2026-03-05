import dotenv from 'dotenv/config';
import app from './app.js';
import connectDb from './config/database.config.js';

const PORT = process.env.PORT || 5060;

const startServer = async () => {
  try {
    await connectDb();
    console.log(`PORT USED : ${PORT} `);
  } catch (err) {
    return console.log(err);
    process.exit(1);
  }
};

startServer();
