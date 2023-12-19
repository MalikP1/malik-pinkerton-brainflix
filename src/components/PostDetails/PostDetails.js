import eye from "../../assets/images/views.svg";
import heart from "../../assets/images/likes.svg";
import "./PostDetails.scss";
function PostDetails() {
  return (
    <article className="post-details">
      <div className="author">
        <p className="author__name">By Red Crow</p>
        <p className="author__date">07/11/2021</p>
      </div>
      <div className="analytics">
        <div className="views">
          <img src={eye}></img>
          <p className="views__analytics">1,001,023</p>
        </div>
        <div className="likes">
          <img src={heart}></img>
          <p className="likes__analytics">110,985</p>
        </div>
      </div>
    </article>
  );
}
export default PostDetails;
