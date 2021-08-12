import { HomeIcon } from "./HomeIcon";
import { PlaylistIcon } from "./PlaylistIcon";
import { Link } from "react-router-dom";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

export const SideNav = () => {
  return (
    <div>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/liked-videos" style={{ textDecoration: "none" }}>
        <i
          style={{
            color: "#c34d76",
            fontSize: "2rem",
            paddingLeft: "0",
            display: "block",
            paddingBottom: "2.3rem",
          }}
          className="far fa-thumbs-up"
        ></i>
      </Link>
      <Link to="/disliked-videos" style={{ textDecoration: "none" }}>
        <i
          style={{
            color: "#c34d76",
            fontSize: "2rem",
            paddingLeft: "0",
            display: "block",
            paddingBottom: "2.3rem",
          }}
          className="far fa-thumbs-down"
        ></i>
      </Link>
      <Link to="/watch-later-videos" style={{ textDecoration: "none" }}>
        <i
          style={{
            color: "#c34d76",
            fontSize: "2rem",
            paddingLeft: "0",
            display: "block",
            paddingBottom: "2rem",
          }}
          className="far fa-clock"
        ></i>
      </Link>
      <Link to="/playlist">
        <PlaylistIcon />
      </Link>

      <svg
        style={{ padding: "2rem 0" }}
        xmlns="http://www.w3.org/2000/svg"
        width="inherit"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffc107"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </div>
  );
};
