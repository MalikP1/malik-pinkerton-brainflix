import eye from "../../assets/images/views.svg";
import heart from "../../assets/images/likes.svg";
import "./PostDetails.scss";
function PostDetails({ details }) {
  return (
    <div className="post-details">
      <div className="author">
        <p className="author__name">By {details.channel}</p>
        <p className="author__date">
          {new Date(details.timestamp).toLocaleDateString("es-pa")}
        </p>
      </div>
      <div className="analytics">
        <div className="views">
          <img src={eye}></img>
          <p className="views__analytics">{details.views}</p>
        </div>
        <div className="likes">
          <img src={heart}></img>
          <p className="likes__analytics">{details.likes}</p>
        </div>
      </div>
    </div>
  );
}
export default PostDetails;
