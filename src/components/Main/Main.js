import "./Main.scss";
import Title from "../Title/Title";
import PostDetails from "../PostDetails/PostDetails";
import Bio from "../Bio/Bio";
import Conversation from "../Conversation/Conversation";
function Main() {
  return (
    <section className="main">
      <article className="main__header">
        <Title />
        <PostDetails />
      </article>
      <Bio />
      <Conversation />
    </section>
  );
}

export default Main;
