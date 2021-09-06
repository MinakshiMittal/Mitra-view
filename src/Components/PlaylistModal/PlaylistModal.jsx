import { useState } from "react";
import { usePlaylists } from "../../Contexts";
import { usePlaylistsActions } from "../../hooks/usePlaylistActions";

export const PlaylistModal = ({ video }) => {
  const {
    state: { playlists },
  } = usePlaylists();
  const { addPlaylist, addToPlaylist, removeFromPlaylist } =
    usePlaylistsActions();
  const [name, setName] = useState("");

  // const addToPlaylistHandler = (event, playlist) => {
  //   console.log(event);
  //   if (event.target.checked) {
  //     return addToPlaylist(playlist?._id, video?._id);
  //   }
  //   return removeFromPlaylist(playlist?._id, video?._id);
  // };

  return (
    <>
      <h1>Add to playlist</h1>
      <input
        type="text"
        placeholder="Create playlist.."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        className="button primary-btn"
        onClick={() => {
          addPlaylist(name, video?._id);
          setName("");
        }}
      >
        +
      </button>
      {playlists.map((playlist) => {
        const isVideoInPlaylist = () => {
          return (
            playlist.videos.find(
              (existingVideo) => existingVideo._id === video._id
            ) !== undefined
          );
        };

        console.log(isVideoInPlaylist());
        return (
          <label key={playlist._id}>
            <input
              type="checkbox"
              defaultChecked={isVideoInPlaylist()}
              onChange={(event) => {
                if (event.target.checked) {
                  console.log("is checked", event.target.checked);
                  return addToPlaylist(playlist?._id, video?._id);
                }
                console.log("is checked", event.target.checked);
                return removeFromPlaylist(playlist?._id, video?._id);
              }}
            />
            {playlist?.name}
          </label>
        );
      })}
    </>
  );
};
