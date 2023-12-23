import BrainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import SearchIcon from "../../assets/images/search.svg";
import MohanImage from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/images/upload.svg";
import "./Header.scss";
import "./Search.scss";
import "./Button.scss";
function Header() {
  return (
    <div className="max-width-header">
      <header className="header">
        <a className="header__link">
          <img
            className="header__link-image"
            src={BrainFlixLogo}
            alt="BrainFlix logo"
          />
        </a>
        <article className="search">
          <input
            className="search__input"
            type="search"
            id="search"
            placeholder="Search"
          />
          <img
            className="search__image"
            src={MohanImage}
            alt="Mohan Muruge"
          ></img>
        </article>
        <article className="button">
          <button className="button__body">UPLOAD</button>
          <img
            className="search__image search__image--tablet"
            src={MohanImage}
            alt="Mohan Muruge"
          ></img>
        </article>
      </header>
    </div>
  );
}

export default Header;
