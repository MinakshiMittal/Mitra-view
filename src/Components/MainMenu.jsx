import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts";

export const MainMenu = () => {
  const { isUserLogin, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
        alt="logo"
        className="hero-image"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          flexGrow: "1",
          cursor: "pointer",
        }}
        className="hero-name"
        onClick={() => navigate("/")}
      >
        MITRA PLAY
      </div>
      {isUserLogin && (
        <i
          className="fas fa-sign-out-alt"
          style={{ marginRight: "2rem", cursor: "pointer" }}
          onClick={() => logout()}
        ></i>
      )}
      {!isUserLogin && (
        <button
          className="button primart-btn"
          style={{ marginRight: "2rem" }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </>
  );
};
