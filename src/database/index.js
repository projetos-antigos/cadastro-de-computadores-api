const mongoose = require("mongoose");
const config = require("../config/database");

const { database, host, port, user, password } = config;

mongoose.set("useCreateIndex", true);

mongoose
  .connect(
    `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`MongoDB running in port ${port}`);
  })
  .catch((err) => {
    console.log(`MongoDB error: ${err.message}`);
  });
