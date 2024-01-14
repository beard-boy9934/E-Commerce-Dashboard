const mongoose = require("mongoose");
const uri =
  // "mongodb+srv://beard_boy:Si9934459842@cluster0.tjlxuk4.mongodb.net/E-Comm?retryWrites=true&w=majority";
  "mongodb+srv://beard_boy:Si9934459842@cluster0.tjlxuk4.mongodb.net/E-Comm?retryWrites=true&w=majority";
  // "mongodb://0.0.0.0/E-Comm";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
