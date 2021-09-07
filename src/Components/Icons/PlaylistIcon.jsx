export const PlaylistIcon = ({ setDisplay, display }) => {
  return (
    <lord-icon
      title="Add To Playlist"
      src="https://cdn.lordicon.com//vnxmkidq.json"
      trigger="hover"
      colors="primary:#c34d76,secondary:#ffffff"
      stroke="110"
      style={{ width: "3.3rem", height: "3.3rem" }}
      onClick={() =>
        display === "none" ? setDisplay("block") : setDisplay("none")
      }
    ></lord-icon>
  );
};
