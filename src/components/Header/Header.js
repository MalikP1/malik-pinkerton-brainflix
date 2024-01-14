import BrainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import MohanImage from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="max-width-header">
      <header className="header">
        <Link to="/" className="header__link">
          <img
            className="header__link-image"
            src={BrainFlixLogo}
            alt="BrainFlix logo"
          />
        </Link>
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
          <Link to="/videoUpload" className="button__body">
            upload
          </Link>
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
