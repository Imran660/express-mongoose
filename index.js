//import statements
const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const StudentRouter = require("./routes/student");

//config
const port = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));
  
//app init
const server = express();

//app middlewares
server.use(express.json());
server.use(
  cors({
    origin: "", // Your FE origin is here
  })
);
server.use("/student", StudentRouter);

//app routes
server.get("/", (req, res) => {
  res.send("Hey learners, let's learn !..");
});

//app listen
server.listen(port, () => console.log(`server running on port ${port}`));
