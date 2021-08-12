import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, VideoListingPage, VideoDetail } from "./Pages";
import { MainMenu, SideNav } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="page-main-menu">
        <MainMenu />
      </header>
      <div
        className="component-list"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <SideNav />
      </div>

      <div className="component-display" style={{}}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/videos" element={<VideoListingPage />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
