import React from "react";
import "./css/MusicPlayer.css";
export default function MusicPlayer({ Curmusic }) {
  return (
    <div className="music-player">
      {
      !!Curmusic ?
       (
        <audio
          src={require(`../assets/music/${Curmusic.musicFile}`)}
          controls
        ></audio>
      )
       : 
        (
            <div>how is it going</div>
        )
      }
    </div>
  );
}
