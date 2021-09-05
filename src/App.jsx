import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, VideoListingPage, VideoDetail, Library } from "./Pages";
import { MainMenu, SideNav, PrivateRoute } from "./Components";
import { useDataLoading } from "./hooks/useDataLoading";

function App() {
  useDataLoading();
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
          <Route path="/" element={<VideoListingPage />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <PrivateRoute path="/library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
