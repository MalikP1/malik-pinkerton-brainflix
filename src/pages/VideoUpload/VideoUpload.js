import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

function VideoUpload() {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!formInputs.input || !formInputs.textArea) {
      return;
    }
    setButtonText("Video Uploaded!");
    const newPost = {
      title: formInputs.input,
      description: formInputs.textArea,
    };

    await axios.post(`${url}/videos`, newPost);

    event.target.reset();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const [formInputs, setFormInputs] = useState(null);
  const [buttonText, setButtonText] = useState("Publish");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  // const [formErrors, setFormErrors] = useState(false)
  return (
    <div className="max-width-upload">
      <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={handleFormSubmit} className="upload__form">
          <section className="main-content">
            <article className="image-container">
              <label className="upload__label">Video thumbnail</label>
              <img
                className="upload__image"
                src={videoPreview}
                alt="person cycling on light blue bike"
              />
            </article>
            <article className="input-container">
              <label className="upload__label">
                Title your video
                <input
                  onChange={handleFormChange}
                  className="upload__input"
                  placeholder="Add a title to your video"
                  name="input"
                />
              </label>

              <label className="upload__label">
                Add a video description
                <textarea
                  onChange={handleFormChange}
                  className="upload__text"
                  placeholder="Add a description to your video"
                  name="textArea"
                />
              </label>
            </article>
          </section>

          <article className="button">
            <Link to="/" className="button__cancel">
              Cancel
            </Link>
            <button
              onClick={() => setButtonText("Add title and description!")}
              className="button__publish"
            >
              {buttonText}
            </button>
          </article>
        </form>
      </main>
    </div>
  );
}

export default VideoUpload;
