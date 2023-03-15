const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

async function on() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://admin:password123S@cluster0.wkptg6l.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log(`server start. PORT: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
on();
