import React, { useState } from "react";

// Components
import Nav from "./components/Nav.js"; 
import Song from "./components/Song.js";
import Player from "./components/Player.js";
import Playlist from "./components/Playlist.js";


//Data
import musicData from "./music/musicData.js";

//Styles
import "./styles/app.scss";

function App() {
  
  //State
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playlistStatus, setPlaylistStatus] = useState(false);

  return (
    <div className={`App ${playlistStatus ? 'playlist-active' : "" }`}>

      <Nav 
      playlistStatus={playlistStatus} 
      setPlaylistStatus={setPlaylistStatus}
      />

      <Song currentSong={currentSong}/>

      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={ setSongs }
      />
      <Playlist 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}  
      playlistStatus={playlistStatus} 
      setPlaylistStatus={setPlaylistStatus}  

      />
    </div>
  );
}

export default App;
