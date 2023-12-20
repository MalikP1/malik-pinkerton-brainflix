import "./NextVideo.scss";

function NextVideo({ videos, handleVideoClick }) {
  return (
    <article className="next-video">
      <p className="next-video__title">NEXT VIDEOS</p>
      {/* {videos.map((video) => {
        return (
            <div className="next-video-container"
            key={video.id}
            onClick={() => {
                handleVideoClick(video);
            }}
            >
            <div className="next-video__image-container">
              <img className="next-video__image" src={video.image}></img>
            </div>
            <div className="next-video__text">
              <p className="next-video__text-title">{video.title}</p>
              <p className="next-video__text-author">{video.channel}</p>
            </div>
          </div>
            );
        })} */}
    </article>
  );
}

export default NextVideo;
