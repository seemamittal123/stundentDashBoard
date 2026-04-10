import React from "react";
import { Link } from "react-router-dom";
const StudentTable = ({
  item,
  idx,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Link
      to={`/student/${item._id}`}
      className="card"
      key={idx}
    >
      <div className="top-section">
        <div className="left-section">
          <div className="avatar">{item.name.charAt(0).toUpperCase()}</div>
          <div>
            <h2>{item.name}</h2>
            <div className="badge">{item.course}</div>
          </div>
        </div>
        <div className="icon-wrapper">
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDelete(item._id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="details">
        <div className="row">
          <div className="atribute">Contact Number</div>
          <div className="answer">{item.contact}</div>
        </div>

        <div className="row">
          <div className="atribute">Address</div>
          <div className="answer">{item.address}</div>
        </div>

        <div className="row">
          <div className="atribute">College</div>
          <div className="answer">{item.college}</div>
        </div>

        <div className="row">
          <div className="atribute">Admission Date</div>
          <div className="answer">
            {new Date(item.admissionDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentTable;
