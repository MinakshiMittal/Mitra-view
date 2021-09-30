import { usePlaylists } from "../Contexts";
import { PlaylistVideoCard } from "../Components";
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#c34d76",
                  marginLeft: "1rem",
                }}
              >
                <h2 style={{ marginRight: "2rem" }}>{playlist.name}</h2>
                <i
                  style={{ opacity: 0.5, cursor: "pointer" }}
                  className="fas fa-trash"
                  onClick={() => removePlaylist(playlist?._id)}
                ></i>
                {/* <i class="fas fa-edit"></i> */}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {playlist.videos.map((video) => {
                  return (
                    <PlaylistVideoCard
                      video={video}
                      noDetail
                      key={video._id}
                      playlistId={playlist?._id}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
