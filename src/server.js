require("dotenv").config({
  path:
    process.env.NODE_ENV === "prod"
      ? ".env"
      : process.env.NODE_ENV === "test"
      ? ".env.test"
      : ".env.development",
});

const app = require("./app");
const { port } = require("./config/server");

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
