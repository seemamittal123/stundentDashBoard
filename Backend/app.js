import express from "express";
import cors from "cors";
import connectDB from "./dataBase.js";
import adminModel from "./models/adminModel.js";
import studentModel from "./models/studentModel.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/log-in", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await adminModel.findOne({ email });
    if (!user) {
      res.json({ message: "User does not exist" });
    } else if (user.password != password) {
      return res.json({ message: "Password is incorrect" });
    } else {
      res.json({ message: "Login succesfully", user });
    }
  } catch (error) {
    res.json({ message: `Login Error : ${error}` });
  }
});

app.get("/student-data", async (req, res) => {
  try {
    const data = await studentModel.find();
    res.send(data);
  } catch (error) {
    res.json({ message: `Error ${error}` });
  }
});

app.post("/create-student-data", async (req, res) => {
  try {
    const user = await studentModel.create(req.body);
    res.json({ message: "Student successfully created", user });
  } catch (error) {
    res.json({ message: `Error : ${error}` });
  }
});

app.delete("/deleteStudent/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id });
    res.json({ message: "Data is successfully deleted", student });
  } catch (error) {
    res.json({ message: `Error : ${error}` });
  }
});

app.get("/student-search", async (req, res) => {
  try {
    let searchValue = req.query.search;
    if (!searchValue) {
      res.json({ message: "Search query required" });
    }
    let data = await studentModel.find();
    let filterData = data.filter((item) =>
      item.name.toUpperCase().includes(searchValue.toUpperCase()),
    );
    res.json({ message: "Data is successfully search", filterData });
  } catch (error) {
    res.json({ message: ` Data is not exist` });
  }
});

app.get("/student-course", async (req, res) => {
  try {
    let course = req.query.course;
    if (!course) {
      res.json({ message: "Course query required" });
    }
    let data = await studentModel.find();
    let filterData = data.filter((item) =>
      item.course.toUpperCase().includes(course.toUpperCase()),
    );
    res.json({ message: "Data is successfully search", filterData });
  } catch (error) {
    res.json({ message: ` Data is not exist` });
  }
});

app.get("/student/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    const student = await studentModel.findById({ _id });
    res.json({ message: "Student is find", student });
  } catch (error) {
    res.send(error);
  }
});

app.put("/edit-student/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedStudent = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedStudent) {
      return res.json({ message: "Student not found" });
    }

    res.json({ message: "Student is successfully Edited", updatedStudent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("server is listen");
    });
    console.log("data base are connected");
  })
  .catch((err) => {
    console.log(err);
  });
