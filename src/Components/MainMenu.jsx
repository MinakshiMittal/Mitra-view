export const MainMenu = () => {
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
        alt="logo"
        className="hero-image"
      />
      <div
        style={{ color: "#c34d76", fontSize: "2rem", flexGrow: "1" }}
        className="hero-name"
      >
        Mitra Play
      </div>
      {/* <a href="/" style={{ color: "#c34d76" }} className="get-started">
          Get Started
        </a> */}
      {/* <a href="/" style={{ color: "#c34d76" }} className="docs">
          Docs
        </a> */}
      <a href="/" style={{ color: "#c34d76" }} className="github">
        <i className="fa fa-github"></i>
      </a>
    </>
  );
};
