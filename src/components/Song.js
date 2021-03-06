const Song = ({currentSong, isPlaying}) => {
  
  return (
    <div className={`song-container ${isPlaying ? "spin-img" :""}`}>
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
