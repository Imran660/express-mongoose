const Student = require("../modals/student");

exports.getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({}).exec();
    res.send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.createStudent = async (req, res) => {
  try {
    await new Student(req.body).save();
    res.status(201).send("User created successfully..");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({ id }).exec();
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { removeKey } = req.body;
    let record;
    if (removeKey) {
       record = await Student.findOne({ id }).exec();
    }
    const student = await Student.findOneAndUpdate({ id },record ? record : req.body, {
      new: true,
    }).exec();
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findOneAndDelete({ id }).exec();
    res.send("student deleted successfully..");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
