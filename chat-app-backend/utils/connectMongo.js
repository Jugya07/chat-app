import mongoose from "mongoose";
mongoose.set("strictQuery");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Connecting to database failed");
    process.exit(1);
  }
};

export default connectToDB;
