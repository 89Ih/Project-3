import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../comps/Header";
import Footer from "../comps/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    const image = event.target.imageUrl.files[0];
    data.append("imageUrl", image);
    data.append("description", description);
    data.append("price", price);
    data.append("video", video);
    data.append("title", title);
    const res = await axios.post(`${process.env.REACT_APP_URL}create`, data);
    console.log(res.data);
    navigate("/courses");
  };

  return (
    <div className="App-body">
      <div>
        <Header />
        {/* <UploadWidget/> */}
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column  align-self-center border border-1 w-50"
      >
        <input
          id="img"
          type="file"
          name="imageUrl"
          accept="image/png, image/jpg"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />

        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={title}
            placeholder="title"
            required
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={description}
            placeholder="description"
            required
            onChange={(event) => setDescription(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="number"
            value={price}
            placeholder="Price "
            required
            onChange={(event) => setPrice(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={video}
            placeholder="YouTube-ID"
            required
            onChange={(event) => setVideo(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-2 w-100">
          <button type="submit" className="btn w-100 css">
            Create
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CreateCourse;
