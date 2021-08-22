export const PlaylistCard = ({ playlist }) => {
  return (
    <div style={{ width: "10rem", height: "30vh", backgroundColor: "white" }}>
      <h1>{playlist.name}</h1>
    </div>
  );
};
