import "../VideoCard/VideoCard.css";
import { Link } from "react-router-dom";
import { VideoPlay } from "../VideoPlay";

export const LibraryVideoCard = ({ video, noDetail, removeVideo }) => {
  return (
    <>
      {noDetail && (
        <div className="card-demo">
          <div className="card-with-badge-demo  video-card">
            <div className="card-container">
              <Link to={`/video/${video?._id}`}>
                <img
                  className="video-image"
                  style={{
                    maxWidth: "250px",
                    height: "auto",
                    flexGrow: "1",
                  }}
                  src={`https://img.youtube.com/vi/${video?.videoURL}/maxresdefault.jpg`}
                  alt=""
                />
                <p style={{ color: "#ffffff6e" }}>{video?.name}</p>
              </Link>
              <button
                className="card-dismiss-button"
                onClick={() => removeVideo(video?._id)}
              >
                <i className="fas fa-lg fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
      {!noDetail && <VideoPlay video={video} />}
    </>
  );
};
