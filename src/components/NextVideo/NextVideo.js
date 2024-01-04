import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ videos }) {
  // handleVideoClick
  console.log(videos);
  // onClick={() => {
  //   handleVideoClick(video);
  // }}
  return (
    <article className="next-video">
      <p className="next-video__title">NEXT VIDEOS</p>
      {videos.map((video) => {
        return (
          <Link
            className="next-video__link"
            key={video.id}
            to={`/video/${video.id}`}
          >
            <div className="next-video-container">
              <div className="next-video__image-container">
                <img className="next-video__image" src={video.image}></img>
              </div>
              <div className="next-video__text">
                <p className="next-video__text-title">{video.title}</p>
                <p className="next-video__text-author">{video.channel}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </article>
  );
}

export default NextVideo;
