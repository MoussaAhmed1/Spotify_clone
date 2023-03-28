import React, { useState } from "react";
import "./css/Home.css";
import MusicCard from "../components/MusicCard";
import { useSelector } from "react-redux";
function Home() {
  const { musicList } = useSelector((state) => state.music);
  const [query,setQuery] = useState("")
  const allCategories = ["all", ...new Set(musicList.map(music=>music.category))];
 const  [showedSongs,SetShowedSongs] = useState(musicList)

  const filterByCategory = (category)=>{
    if(category !== "all")
    SetShowedSongs([...musicList.filter(song=>song.category === category)]);
    else
    SetShowedSongs(musicList)

  }
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
      <div className="row category d-flex justify-content-between">
      
        {
          !!allCategories && 
          

          allCategories.map((cat,ind)=>{
            return(
                  <button key={ind} className="m-3 btn btn-success  col w-50"onClick={()=>filterByCategory(cat)}>{cat}</button>
              )
            })
           
        }
     
      </div>
      <div className="music-main-section-content">
        {!!showedSongs?
          showedSongs.filter(music=>{
            
            if(query===""){
              return music;
            }
            else if(music.name.toLowerCase().includes(query.toLowerCase())){
              return music;
            }
          }).map((music) => {
            return <MusicCard music={music} key={music.id} />;
          })
          :
          "there is no result"
          }
      </div>
    </>
  );
}

export default Home;
