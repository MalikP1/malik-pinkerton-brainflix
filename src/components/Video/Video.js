import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <div className="max-width-video">
      <video className="video" controls poster={selectedVideo.image}>
        {/* <source src={selectedVideo.video} type="video/webm" /> */}
      </video>
    </div>
  );
}

export default Video;
