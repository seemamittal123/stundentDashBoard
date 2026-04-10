import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../redux/userReducer";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelName = (value) => {
    setEmail(value);
    setError({ ...error, emailError: "" });
  };
  const handelPassword = (value) => {
    setPassword(value);
    setError({ ...error, passwordError: "" });
  };
  const handleSubmit = async () => {
    let errors = {
      emailError: "",
      passwordError: "",
    };
    let payload = {
      email,
      password,
    };
    if (!email) errors.emailError = "Email is Required";
    if (!password) errors.passwordError = "Password is Required";
    setError(errors);
    if (errors.emailError || errors.passwordError) return;
    if (!email.includes("@")) errors.emailError = "@ or . is required";
    setError(errors);
    if (errors.emailError) return;
    try {
      let { data } = await axios.post("http://localhost:5000/log-in", payload);
      if (data.message == "Login succesfully") {
        toast.success(data.message);
        dispatch(setLogin());
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login error");
    }
  };
  return (
    <div className="form-outer">
      <div className="Login-form">
        <h1>Log in</h1>
        <div className="form">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => handelName(e.target.value)}
              value={email}
            />
            <p>{error.emailError}</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type={toggle ? "password" : "text"}
              placeholder="Enter Password"
              onChange={(e) => handelPassword(e.target.value)}
              value={password}
            />
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <i class="fa-solid fa-eye"></i>
              ) : (
                <i class="fa-solid fa-eye-slash"></i>
              )}
            </button>
            <p>{error.passwordError}</p>
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
