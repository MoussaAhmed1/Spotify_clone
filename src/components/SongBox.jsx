import React from "react";
import './css/SongBox.css'
export default function SongBox({song,operation,onclick}) {
    const {id,img,name,author_name} = song;
  return (
    <div className="song-box" key={id}>
      <div className="img-wrapper m-3">
        <img src={require(`../assets/musicImgs/${img}`)} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
        <h6>{author_name}</h6>
      </div>
      <button
        type="button"
        className={`song-box-btn btn ${operation==='Remove'?"btn-danger":"btn-success"} `}
        onClick={() => onclick(id)}
      >
        {operation==="Add"? "Add":"Remove"}
      </button>
    </div>
  );
}
