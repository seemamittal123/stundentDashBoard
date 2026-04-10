import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BarLoader } from "react-spinners";
const Student = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (_id) => {
    navigate(`/create-student/${_id}`);
  };

  useEffect(() => {
    const handleData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://stundentdashboard.onrender.com/student/${id}`);
        setStudent(data.student);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <BarLoader width={150} color="#2563EB" />
        </div>
      ) : student ? (
        <div className="profile-page">
          <div className="profile-top-section"></div>
          <div className="details-section">
            <div className="top-section">
              <div className="profile-image">
                <div className="name-alphabet icon">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <div className="img">
                  <img src={file} alt="" />
                </div>
                <div className="file">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.value)}
                    hidden
                  />
                  <label htmlFor="file">
                    <i class="fa-solid fa-pencil"></i>
                  </label>
                </div>
              </div>
              <button
                className="edit-btn"
                onClick={() => handleEdit(student._id)}
              >
                <i class="fa-solid fa-pencil"></i>
                Edit
              </button>
            </div>
            <div className="name-section">
              <h1 className="name">{student.name}</h1>
              <h2 className="course">{student.stream} Student</h2>
            </div>
            <div className="info">
              <div className="personal-info">
                <div className="heading">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>Personal Info</span>
                </div>
                <div className="data">
                  <h2 className="attribute">Father's Name </h2>
                  <h3 className="answer">{student.fatherName}</h3>
                </div>
                <div className="data">
                  <h2 className="attribute">Contact No </h2>
                  <h3 className="answer">{student.contact}</h3>
                </div>
                <div className="data gender">
                  <h2 className="attribute">Gender</h2>
                  <h3 className={`gender-${student.gender}`}>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <p>{student.gender}</p>
                  </h3>
                </div>
                <div className="data">
                  <h2 className="attribute">Address</h2>
                  <h3 className="answer">{student.address}</h3>
                </div>
              </div>
              <div className="acadmic-info">
                <div className="heading">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <span>Academic Info</span>
                </div>
                <div className="data">
                  <h1 className="attribute">
                    <i class="fa fa-suitcase" aria-hidden="true"></i>
                    College/School
                  </h1>
                  <h3 className="answer">{student.college}</h3>
                </div>

                <div className="data">
                  <h1 className="attribute">
                    <i class="fa-brands fa-duolingo"></i> Course
                  </h1>
                  <h3 className="answer">{student.course}</h3>
                </div>
                <div className="data">
                  <h1 className="attribute">
                    <i class="fa-solid fa-calendar"></i> Year
                  </h1>
                  <h3 className="answer">{student.stream}</h3>
                </div>
                <div className="data">
                  <h1 className="attribute">
                    <i class="fa-solid fa-calendar"></i> Admission Date
                  </h1>
                  <h3 className="answer">
                    {new Date(student.admissionDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="empty-heading">Student is not found</h1>
      )}
    </>
  );
};

export default Student;
