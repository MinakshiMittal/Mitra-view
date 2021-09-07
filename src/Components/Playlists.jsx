import { usePlaylists } from "../Contexts";
import { VideoCard } from "../Components";
import { usePlaylistsActions } from "../hooks/usePlaylistActions";

export const Playlists = () => {
  const {
    state: { playlists },
  } = usePlaylists();
  const { removePlaylist } = usePlaylistsActions();
  return (
    <>
      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "block",
          width: "100%",
        }}
      >
        <h1>Playlists</h1>
      </div>
      <div>
        {playlists.map((playlist) => {
          return (
            <div key={playlist._id}>
              <div>
                <h2>{playlist.name}</h2>
                <i
                  className="fas fa-trash"
                  onClick={() => removePlaylist(playlist?._id)}
                ></i>
                {/* <i class="fas fa-edit"></i> */}
              </div>
              {playlist.videos.map((video) => {
                return <VideoCard video={video} noDetail key={video._id} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
