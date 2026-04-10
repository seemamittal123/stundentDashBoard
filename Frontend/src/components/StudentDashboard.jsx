import React, { useEffect, useState } from "react";
import StudentTable from "./StudentTable";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
const StudentDashboard = () => {
  const [currentData, setcurrentData] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [course, setCourse] = useState("");
  const handleSearch = async (value) => {
    setSearch(value);
    setLoding(true);
    const { data } = await axios.get(
      `http://localhost:5000/student-search?search=${value}`,
    );
    if (data.message == "Data is successfully search") {
      setcurrentData(data.filterData);
    }
    if (data.message == "No Data Yet") {
      toast.warn("No data");
    }

    setLoding(false);
  };
  const handleData = async () => {
    setLoding(true);
    try {
      let res = await axios.get("http://localhost:5000/student-data");
      setData(res.data);
      setLoding(false);
    } catch (error) {
      setLoding(false);
      console.log(error);
    }
  };

  const handleEdit = (_id) => {
    console.log(_id);
  };
  const handleDelete = async (_id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/deleteStudent/${_id}`,
      );
      toast.success(data.message);
      handleData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCourse = async (value) => {
    setCourse(value);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/student-course?course=${value}`,
      );
      if (data.message == "Data is successfully search") {
        setcurrentData(data.filterData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    setcurrentData(data);
    if (search.length == 0) setcurrentData(data);
  }, [data, search, course]);
  return (
    <div className="student-info-section">
      <div className="header-section">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => setSearch("")}>
            {search != "" ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-magnifying-glass"></i>
            )}
          </button>
        </div>
        <select
          className="filter-option-wrapper"
          onChange={(e) => handleCourse(e.target.value)}
        >
          <option value="#">Select Course</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="JAVA">Java</option>
          <option value="Python">Python</option>
          <option value="Data Ayalyst">Data Ayalyst</option>
          <option value="Front-end Developer">Front-end Developer</option>
          <option value="back-end Developer">Back-end Developer</option>
        </select>

        <Link to="/create-student" className="add-student-btn">
          Add Student
        </Link>
      </div>
      <div className="card-wrapper">
        {loding ? (
          <div className="loader">
            <BarLoader width={150} color="#2563EB" />
          </div>
        ) : currentData.length != 0 ? (
          currentData.map((item, idx) => (
            <StudentTable
              item={item}
              idx={idx}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h1 className="empty-heading">Student data is not found</h1>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
