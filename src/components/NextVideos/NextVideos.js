import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ videos }) {
  return (
    <section className="next-videos">
      <p className="next-videos__title">Next videos</p>
      {videos.map((video) => {
        return (
          <Link
            className="next-videos__link"
            key={video.id}
            to={`/video/${video.id}`}
          >
            <article className="next-videos-container">
              <div className="next-videos__image-container">
                <img className="next-videos__image" src={video.image}></img>
              </div>
              <div className="next-videos__text">
                <p className="next-videos__text-title">{video.title}</p>
                <p className="next-videos__text-author">{video.channel}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default NextVideos;
