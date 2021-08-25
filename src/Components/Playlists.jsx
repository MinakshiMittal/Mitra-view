import { usePlaylists } from "../Contexts";
import { VideoCard } from "../Components";

export const Playlists = () => {
  const {
    state: { playlists },
  } = usePlaylists();
  console.log("liked", playlists);
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", display: "block" }}>
          Playlists
        </h1>
      </div>
      <div>
        {playlists.map((playlist) => {
          console.log("playlist", playlist);
          return (
            <div key={playlist._id}>
              <h2>{playlist.name}</h2>
              {playlist.videos.map((video) => {
                return (
                  <VideoCard video={video.video} noDetail key={video._id} />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
