import { Footer } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../icons/header.png";
import hero from "../icons/hero.jpg";
import Header from "../comps/Header";

const Home = () => {
  return (
    <div className="App-body ">
      <Header />
      <div
        className="card align-self-center align-items-center  p-2"
        style={{ width: 600, height: 400, gap: 10 }}
      >
        <img
          src={hero}
          className="card-img-top"
          alt={"hero"}
          style={{ height: 150, width: 200 }}
        />
        <div className="card-body d-flex flex-column align-items-center ">
          <h5 className="card-title ">Master Course</h5>
          <p className="card-text">
            Master Course is a platform where you can teach and learn online.
            Teachers can create courses with videos as well as describe the
            details of their course content. Students have access to the courses
            and they can leave comments and rate them.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
