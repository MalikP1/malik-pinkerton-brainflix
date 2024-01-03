import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <div className="max-width-upload">
      <main className="video">
        <h1 className="video__title">Upload Video</h1>
        <form className="video__form">
          <section className="main-content">
            <article className="image-container">
              <label className="video__label">VIDEO THUMBNAIL</label>
              <img
                className="video__image"
                src={videoPreview}
                alt="person cycling on light blue bike"
              />
            </article>
            <article className="input-container">
              <label className="video__label">TITLE YOUR VIDEO</label>
              <input
                className="video__input"
                placeholder="Add a title to your video"
              />
              <label className="video__label">ADD A VIDEO DESCRIPTION</label>
              <textarea
                className="video__text"
                placeholder="Add a description to your video"
              />
            </article>
          </section>

          <article className="button">
            <button className="button__cancel">CANCEL</button>
            <button className="button__publish">PUBLISH</button>
          </article>
        </form>
      </main>
    </div>
  );
}

export default VideoUpload;
