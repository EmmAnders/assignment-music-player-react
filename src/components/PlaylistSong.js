import React from "react";

const PlaylistSong = ({ song, songs, setCurrentSong, id, setSongs }) => {
  const selectSongHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);


    const newSongs = songs.map((song)=> {
      if (song.id === id){
        return { 
          ...song, 
          active:true,
        };
      } else{
        return{
          ...song,
          active: false,
        };
      }
    })
    setSongs(newSongs);
  };
  




  return (
    <div
      onClick={selectSongHandler}
      className={`playlist-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default PlaylistSong;
