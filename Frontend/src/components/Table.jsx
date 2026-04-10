import React from "react";

const Table = () => {
  return (
    <div className="table">
      <h1 className="heading"> Java Batch</h1>
      <div className="table-head">
        <div className="table-row">
          <h1 className="table-heading">Name</h1>
          <h1 className="table-heading">Stream</h1>
          <h1 className="table-heading">Contact No</h1>
          <h1 className="table-heading">College Name</h1>
          <h1 className="table-heading">Address</h1>
          <h1 className="table-heading">Timing</h1>
        </div>
      </div>
      <div className="table-body">
        <div className="table-row">
          <div className="table-data">Pulkit mittal</div>
          <div className="table-data">9258490945</div>
          <div className="table-data">I.P college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
        <div className="table-row">
          <div className="table-data">Punit</div>
          <div className="table-data">9258490956</div>
          <div className="table-data">I.P college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
        <div className="table-row">
          <div className="table-data">Harsh</div>
          <div className="table-data">9258490945</div>
          <div className="table-data">G & R college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
        <div className="table-row">
          <div className="table-data">Vinay</div>
          <div className="table-data">9258490945</div>
          <div className="table-data">Maharaja college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
        <div className="table-row">
          <div className="table-data">Geetaish</div>
          <div className="table-data">9258490945</div>
          <div className="table-data">SBMT college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
        <div className="table-row">
          <div className="table-data">Aditya</div>
          <div className="table-data">9258490945</div>
          <div className="table-data">SBMT college</div>
          <div className="table-data">bsr</div>
          <div className="table-data">4 to 5</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
