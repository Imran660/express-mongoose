const {
  getAllStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudent,
} = require("../controllers/student");

const Router = require("express").Router();

Router.get("/all", getAllStudent);
Router.get("/:id", getStudent);
Router.post("/create", createStudent);
Router.put("/update/:id", updateStudent);
Router.delete("/delete/:id", deleteStudent);

module.exports=Router
