import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Sort from "../icons/sort.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "antd";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const retrieveCourses = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}courses`);

      console.log(res.data);

      setCourses(res.data);
    };

    retrieveCourses();
  }, []);

  const sortName = () => {
    const courseSorted = Array.from(courses).sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    setCourses(courseSorted);
  };

  return (
    <div className="App-body">
      <div className=" d-flex flex-column " style={{ gap: 10 }}>
        <Header />

        <div className=" w-50 align-self-center align-items-center">
          <div className=" d-flex flex-row   ">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <img
              onClick={sortName}
              src={Sort}
              alt={"sort"}
              className="css-sort"
              style={{ width: 30 }}
            />
          </div>
          <h5 className="d-flex justify-content-center m-1">
            Your plan contains <em className="css-color">{courses.length}</em>{" "}
            courses
          </h5>
        </div>

        <Row style={{ width: "100%", justifyContent: "center" }}>
          {courses
            .filter((course) =>
              course.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((course) => (
              <Col key={course._id}>
                <Card style={{ width: 400, height: 450, margin: 10 }}>
                  <Link to={`/course/${course._id}`}>
                    <img
                      src={course.image}
                      width={350}
                      height={150}
                      alt={course.title}
                      className="rounded border"
                    />
                  </Link>
                  <p>
                    <b>{course.title}</b>
                  </p>
                  <p>{course.description}</p>
                  <p>
                    <b>{course.price} </b> €{" "}
                  </p>
                </Card>
              </Col>
            ))}
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
