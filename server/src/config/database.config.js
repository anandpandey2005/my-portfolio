import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('Error: MONGO_URI is not defined in .env file');
      process.exit(1);
    }
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`\ndatabase connected`);
  } catch (err) {
    console.error('database connection FAILED ', err);
    process.exit(1);
  }
};

export default connectDb;
