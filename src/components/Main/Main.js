import "./Main.scss";
import Title from "../Title/Title";
import PostDetails from "../PostDetails/PostDetails";
import Bio from "../Bio/Bio";
import Conversation from "../Conversation/Conversation";
import Comments from "../Comments/Comments";
import NextVideo from "../NextVideo/NextVideo";

function Main({ selectedVideo, videoList }) {
  // , handleVideoClick
  return (
    <div className="max-width-main">
      <main className="main">
        <section className="main__body">
          <Title text={selectedVideo.title} />
          <PostDetails details={selectedVideo} />
          <Bio bio={selectedVideo.description} />
          <Conversation convo={selectedVideo} />
          <Comments comments={selectedVideo.comments} />
        </section>
        <aside className="main__aside">
          <NextVideo videos={videoList} />
          {/* handleVideoClick={handleVideoClick} */}
        </aside>
      </main>
    </div>
  );
}

export default Main;
