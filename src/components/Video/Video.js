import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <video className="video" controls poster={selectedVideo.image}>
      {/* <source src={selectedVideo.video} type="video/webm" /> */}
    </video>
  );
}

export default Video;
