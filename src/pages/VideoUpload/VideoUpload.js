import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function VideoUpload() {
  return (
    <div className="max-width-upload">
      <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form">
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
                  className="upload__input"
                  placeholder="Add a title to your video"
                  name="input"
                />
              </label>

              <label className="upload__label">
                ADD A VIDEO DESCRIPTION
                <textarea
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
            <button className="button__publish">PUBLISH</button>
          </article>
        </form>
      </main>
    </div>
  );
}

export default VideoUpload;
