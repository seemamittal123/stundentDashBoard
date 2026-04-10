import React, { useState } from "react";
import { useEffect } from "react";
import Table from "./Table";
const Letures = () => {
  const [currentData, setcurrentData] = useState([]);
  const handleData = async () => {
    try {
      let { data } = await axios.get("http://localhost:5000/student-data");
      setcurrentData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div>
      <Table/>
    </div>
  );
};

export default Letures;
