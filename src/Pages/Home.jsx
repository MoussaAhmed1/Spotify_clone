import React, { useState } from "react";
import "./css/Home.css";
import MusicCard from "../components/MusicCard";
import { useSelector } from "react-redux";
function Home() {
  const { musicList } = useSelector((state) => state.music);
  const [query,setQuery] = useState("")

  return (
    <>
      <div className="row">
        <input
          type="search"
          name="musicSerch"
          id="musicSerch"
          placeholder="what are you looking for?"
          onChange={e=>setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div className="music-main-section-content">
        {!!musicList &&
          musicList.filter(music=>{
            if(query==""){
              return music;
            }
            else if(music.name.toLowerCase().includes(query.toLowerCase())){
              return music;
            }
          }).map((music) => {
            return <MusicCard music={music} key={music.id} />;
          })}
      </div>
    </>
  );
}

export default Home;
