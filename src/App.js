import React, { useState } from "react";

// Components
import Song from "./components/Song.js";
import Player from "./components/Player.js";
import Playlist from "./components/Playlist.js";

//Data
import musicData from "./musicData.js";

//Styles
import "./styles/app.scss";

function App() {
  
  //State
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Playlist songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
