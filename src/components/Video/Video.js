import "./Video.scss";

function Video({ selectedVideo }) {
  return <video className="video" poster={selectedVideo.image}></video>;
}

export default Video;
