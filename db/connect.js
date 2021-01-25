const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("🟢 [Database] DB connected"))
  .catch((err) => console.log("🔴 DB connection faild", err));