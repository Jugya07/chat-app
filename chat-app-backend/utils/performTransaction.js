import mongoose from "mongoose";

/*
	Transaction to make batch update / create queries atomic
	Takes an async fn as a param and returns whatever it returns
	or throws int case of an error
*/
const performTransaction = async (fn) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const res = await fn();
    await session.commitTransaction();
    return res;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export default performTransaction;
