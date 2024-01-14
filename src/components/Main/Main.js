import "./Main.scss";
import Title from "../Title/Title";
import PostDetails from "../PostDetails/PostDetails";
import Bio from "../Bio/Bio";
import Conversation from "../Conversation/Conversation";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";

function Main({ selectedVideo, videoList }) {
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
          <NextVideos videos={videoList} />
        </aside>
      </main>
    </div>
  );
}

export default Main;
