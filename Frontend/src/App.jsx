import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
