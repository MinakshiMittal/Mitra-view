import { useState } from "react";
import { usePlaylists } from "../../Contexts";
import { usePlaylistsActions } from "../../hooks/usePlaylistActions";
import "./PlaylistModal.css";

export const PlaylistModal = ({ video, display }) => {
  const {
    state: { playlists },
  } = usePlaylists();
  const { addPlaylist, addToPlaylist, removeFromPlaylist } =
    usePlaylistsActions();
  const [name, setName] = useState("");

  return (
    <div className="add-to-playlist-container" style={{ display }}>
      {/* <h1>Add to playlist</h1> */}
      <div className="create-container">
        <input
          className="playlist-create"
          type="text"
          placeholder="Create playlist.."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="button primary-btn playlist"
          onClick={() => {
            addPlaylist(name, video?._id);
            setName("");
          }}
        >
          +
        </button>
      </div>
      {playlists.map((playlist) => {
        const isVideoInPlaylist = () => {
          return (
            playlist.videos.find(
              (existingVideo) => existingVideo._id === video._id
            ) !== undefined
          );
        };

        return (
          <label key={playlist._id}>
            <input
              className="playlist-checkbox"
              type="checkbox"
              defaultChecked={isVideoInPlaylist()}
              onChange={(event) => {
                if (event.target.checked) {
                  return addToPlaylist(playlist?._id, video?._id);
                }
                return removeFromPlaylist(playlist?._id, video?._id);
              }}
            />
            {playlist?.name}
          </label>
        );
      })}
    </div>
  );
};
