import "./Title.scss";

function Title({ text }) {
  return (
    <div className="title">
      <h1 className="title__text">{text}</h1>
    </div>
  );
}

export default Title;
