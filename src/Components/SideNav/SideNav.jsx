import { HomeIcon } from "../Icons/HomeIcon";
import { PlaylistIcon } from "../Icons/PlaylistIcon";
import { Link } from "react-router-dom";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import LightThemeIcon from "../../assets/LightThemeIcon.svg";
import DarkThemeIcon from "../../assets/DarkThemeIcon.svg";
import "./SideNav.css";

defineLordIconElement(loadAnimation);

export const SideNav = () => {
  return (
    <div>
      <Link to="/">
        <HomeIcon className="icon-style" />
      </Link>
      <i className="fas fa-photo-video icon-style"></i>
      {/* <Link to="/liked-videos" style={{ textDecoration: "none" }}>
        <i className="far fa-thumbs-up icon-style"></i>
      </Link>
      <Link to="/history" style={{ textDecoration: "none" }}>
        <i className="fas fa-history icon-style"></i>
      </Link>
      <Link to="/watch-later-videos" style={{ textDecoration: "none" }}>
        <i
          style={{
            paddingBottom: "2rem",
          }}
          className="far fa-clock icon-style"
        ></i>
      </Link>
      <Link to="/playlist">
        <PlaylistIcon className="icon-style" />
      </Link>
      <img src={DarkThemeIcon} alt="light theme icon" className="icon-style" />
      <img src={LightThemeIcon} alt="light theme icon" className="icon-style" /> */}
    </div>
  );
};
