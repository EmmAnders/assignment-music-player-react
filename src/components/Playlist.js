import React from 'react';
import PlaylistSong from './PlaylistSong';


const Playlist = ({ songs, setCurrentSong, audioRef, isPlaying}) => {
  return ( 
    <div className="playlist">
      <h2>Playlist</h2>
      <div className="playlist-songs">
      {songs.map(song => (
        <PlaylistSong 
        songs={songs} 
        song={song} 
        setCurrentSong={setCurrentSong}
        id={song.id}
        key={song.id}
        audioRef={audioRef}
        isPlaying={isPlaying}
        />
      ))}
      </div>
    </div>
    
   );
}
 
export default Playlist;