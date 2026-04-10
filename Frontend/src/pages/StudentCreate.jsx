import React, { useEffect, useState } from "react";
import icon from "../assets/icon2.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const StudentCreate = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState({});
  const [college, setCollege] = useState("");
  const [stream, setStream] = useState("");
  const [course, setCourse] = useState("");
  const [contact, setContact] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleName = (value) => {
    setName(value);
    setError({ ...error, nameError: "" });
  };
  const handlefatherName = (value) => {
    setFatherName(value);
    setError({ ...error, FatherNameError: "" });
  };
  const handleClgName = (value) => {
    setCollege(value);
    setError({ ...error, collegeNameError: "" });
  };

  const handleAdmissionDate = (value) => {
    setAdmissionDate(value);
    setError({ ...error, admissionDateError: "" });
  };
  const handleStream = (value) => {
    setStream(value);
    setError({ ...error, streamError: "" });
  };
  const handleCourse = (value) => {
    setCourse(value);
    setError({ ...error, courseError: "" });
  };
  const handleContact = (value) => {
    setContact(value);
    setError({ ...error, contactError: "" });
  };
  const handleAddress = (value) => {
    setaddress(value);
    setError({ ...error, addressError: "" });
  };

  const handleSubmit = async () => {
    let errors = {
      nameError: "",
      FatherNameError: "",
      admissionDateError: "",
      contactError: "",
      courseError: "",
      streamError: "",
      collegeNameError: "",
      addressError: "",
    };
    let payload = {
      name,
      fatherName,
      contact,
      stream,
      course,
      admissionDate,
      college,
      gender,
      address,
    };
    if (!name) errors.nameError = "Name is required";
    if (!fatherName) errors.FatherNameError = "Father Name is required";
    if (!contact) errors.contactError = "Contact number is required";
    if (!admissionDate)
      errors.admissionDateError = "Admission date is required";
    if (!stream) errors.streamError = "Stream is required";
    if (!course) errors.courseError = "Course is required";
    if (!college) errors.collegeNameError = "College name is required";
    if (!address) errors.addressError = "Address is required";
    setError(errors);

    if (
      errors.nameError ||
      errors.FatherNameError ||
      errors.admissionDateError ||
      errors.contactError ||
      errors.courseError ||
      errors.streamError ||
      errors.collegeNameError
    )
      return;

    try {
      let { data } = await axios.post(
        "http://localhost:5000/create-student-data",
        payload,
      );
      toast.success(data.message);
      navigate("/student-inquiry");
    } catch (error) {
      console.log(error);
    }
  };
  const handleData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/student/${id}`);

      const {
        name,
        fatherName,
        address,
        admissionDate,
        course,
        stream,
        college,
        contact,
        gender,
      } = data.student;
      setName(name);
      setFatherName(fatherName);
      setGender(gender);
      setContact(contact);
      setStream(stream);
      setCourse(course);
      setCollege(college);
      setAdmissionDate(admissionDate);
      setaddress(address);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = async () => {
    let errors = {
      nameError: "",
      FatherNameError: "",
      admissionDateError: "",
      contactError: "",
      courseError: "",
      streamError: "",
      collegeNameError: "",
      addressError: "",
    };
    let payload = {
      name,
      fatherName,
      contact,
      stream,
      course,
      admissionDate,
      college,
      gender,
      address,
    };
    if (!name) errors.nameError = "Name is required";
    if (!fatherName) errors.FatherNameError = "Father Name is required";
    if (!contact) errors.contactError = "Contact number is required";
    if (!admissionDate)
      errors.admissionDateError = "Admission date is required";
    if (!stream) errors.streamError = "Stream is required";
    if (!course) errors.courseError = "Course is required";
    if (!college) errors.collegeNameError = "College name is required";
    if (!address) errors.addressError = "Address is required";
    setError(errors);

    if (
      errors.nameError ||
      errors.FatherNameError ||
      errors.admissionDateError ||
      errors.contactError ||
      errors.courseError ||
      errors.streamError ||
      errors.collegeNameError
    )
      return;

    try {
      let { data } = await axios.put(
        `http://localhost:5000/edit-student/${id}`,
        payload,
      );
      toast.success(data.message);
      navigate(`/student/${id}`);
    } catch (error) { 
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, [id]);

  return (
    <div className="container">
      <div className="student-form">
        <div className="form-container">
          <h2>Student Details</h2>
          <div className="forms-wrapper">
            <div className="form">
              <h3>
                <i class="fa fa-user" aria-hidden="true"></i>
                Basic Information
              </h3>
              <div className="input-wrapper">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  value={name}
                  onChange={(e) => handleName(e.target.value)}
                />
                <p>{error.nameError}</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="FName">Father's Name</label>
                <input
                  type="text"
                  name="FName"
                  value={fatherName}
                  onChange={(e) => handlefatherName(e.target.value)}
                />
                <p>{error.FatherNameError}</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="Gender">Gender</label>
                <div className="inner-wrapper">
                  <input
                    type="radio"
                    name="Gender"
                    id="male"
                    onChange={(e) => setGender("Male")}
                  />
                  <label for="male" id="male">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="Gender"
                    id="female"
                    onChange={(e) => setGender("female")}
                  />
                  <label for="female" id="female">
                    Female
                  </label>
                  <input
                    type="radio"
                    id="other"
                    name="Gender"
                    onChange={(e) => setGender("other")}
                  />
                  <label id="other" for="other">
                    Other
                  </label>
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Contact Number</label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => handleContact(e.target.value)}
                />
                <p>{error.contactError}</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleAddress(e.target.value)}
                />
                <p>{error.addressError}</p>
              </div>
              <button
                onClick={id ? handleEdit : handleSubmit}
                className="submit-btn"
              >
                {id ? "Edit" : "Create"}
              </button>
            </div>
            <div className="inner-form-wrapper">
              <div className="form">
                <h3>
                  <img src={icon} alt="" />
                  Accadmic Details
                </h3>
                <div className="input-wrapper">
                  <label htmlFor="S/CName">School/College Name</label>
                  <input
                    type="text"
                    name="clgName"
                    value={college}
                    onChange={(e) => handleClgName(e.target.value)}
                  />
                  <p>{error.collegeNameError}</p>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="stream">Stream</label>
                  <select
                    name=""
                    id="#"
                    onChange={(e) => handleStream(e.target.value)}
                  >
                    <option value="#">Select Stream</option>
                    <option value="10TH">10th</option>
                    <option value="12TH">12th</option>
                    <option value="BCA">BCA</option>
                    <option value="B.com">B.com</option>
                    <option value="BBA">BBA</option>
                    <option value="BA">BA</option>
                  </select>
                  <button className="arrow">
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                  <p>{error.streamError}</p>
                </div>
              </div>
              <div className="form">
                <h3>
                  <img src={icon} alt="" />
                  Course Details
                </h3>
                <div className="input-wrapper">
                  <label htmlFor="">Course/Stream</label>
                  <select
                    name=""
                    id="#"
                    onChange={(e) => handleCourse(e.target.value)}
                  >
                    <option value="#">Select</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Front-end developer">
                      Front-end developer
                    </option>
                    <option value="Back-end developer">
                      Back-end developer
                    </option>
                    <option value="Python"> Python</option>
                    <option value="Data Ayalyst">Data Ayalyst</option>
                  </select>
                  <button className="arrow">
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                  <p>{error.courseError}</p>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="">Admission Date</label>
                  <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    value={admissionDate}
                    onChange={(e) => handleAdmissionDate(e.target.value)}
                  />
                  <p>{error.admissionDateError}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCreate;
