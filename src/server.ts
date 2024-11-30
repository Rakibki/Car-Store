import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const main = async () => {
  try {
    // connecting db
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`server is at ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
