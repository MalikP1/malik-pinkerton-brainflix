import "./Video.scss";
const url = process.env.REACT_APP_BASE_URL;

function Video({ selectedVideo }) {
  return (
    <div className="max-width-video">
      <video className="video" controls poster={url + selectedVideo.image}>
        {/* <source src={selectedVideo.video} type="video/webm" /> */}
      </video>
    </div>
  );
}

export default Video;
