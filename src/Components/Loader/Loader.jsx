import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-div">
      <lord-icon
        src="https://cdn.lordicon.com/abdshgok.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#08a88a"
        style={{ width: "2rem", height: "2rem" }}
      ></lord-icon>
    </div>
  );
};
