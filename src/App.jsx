import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, VideoListingPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videos" element={<VideoListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
