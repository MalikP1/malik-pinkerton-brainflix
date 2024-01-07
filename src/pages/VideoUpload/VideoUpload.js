import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function VideoUpload() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);
    if (!formInputs) {
      return;
    }
    setButtonText("Video Uploaded!");
    event.target.reset();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const [formInputs, setFormInputs] = useState(null);
  const [buttonText, setButtonText] = useState("PUBLISH");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  // const [formErrors, setFormErrors] = useState(false)
  // handle
  return (
    <div className="max-width-upload">
      <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={handleFormSubmit} className="upload__form">
          <section className="main-content">
            <article className="image-container">
              <label className="upload__label">VIDEO THUMBNAIL</label>
              <img
                className="upload__image"
                src={videoPreview}
                alt="person cycling on light blue bike"
              />
            </article>
            <article className="input-container">
              <label className="upload__label">
                TITLE YOUR VIDEO
                <input
                  onChange={handleFormChange}
                  className="upload__input"
                  placeholder="Add a title to your video"
                  name="input"
                />
              </label>

              <label className="upload__label">
                ADD A VIDEO DESCRIPTION
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
              CANCEL
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
