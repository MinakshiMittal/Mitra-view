import "./VideoCard.css";
import { Link } from "react-router-dom";
import { VideoPlay } from "../VideoPlay";

export const VideoCard = ({ video, noDetail }) => {
  return (
    <>
      {noDetail && (
        <Link to={`/video/${video?._id}`}>
          <div className="card-demo">
            <div className="card-with-badge-demo  video-card">
              <div className="card-container">
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
              </div>
            </div>
          </div>
        </Link>
      )}
      {!noDetail && <VideoPlay video={video} />}
    </>
  );
};
