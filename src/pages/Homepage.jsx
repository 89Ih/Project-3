import { Footer } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../icons/header.png";
import hero from "../icons/hero.jpg";

const Home = () => {
  return (
    <div className="App-body ">   


      <nav className="navbar">
        <div className="container-fluid  flex-row ">
          <div className="p-2">
            <img src={header} alt={"header"}style={{ height: 75 }} className="mx-2"/>
            <span className="p-2 w-100   navbar-brand mb-5 h1 text-light">Master Course</span>
          </div>
          <div className="p-2 d-flex flex-row mx-2" style={{ gap: 15 }}>
            <b><a className="p-1  nav-link css rounded  text-center "href="/login"style={{ width: 75 }}>Log in</a></b>
            <b><a className="p-1  nav-link css rounded  text-center "href="/signup"style={{ width: 75 }}>Sign up</a></b>
          </div>
        </div>
      </nav>

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
          <h5 className="card-title ">Card title</h5>
          <p className="card-text">
            Master Course is a platform that allows instructors to display
            online courses on their preferred topics. instructors can upload
            videos, source code for developers,PowerPoint presentations, PDFs,
            audio, ZIP files and any other content that learners might find
            helpful.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
