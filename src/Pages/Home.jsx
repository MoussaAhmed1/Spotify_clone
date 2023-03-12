import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import './css/Home.css';
import MusicCard from '../components/MusicCard';
function Home() {
 const [musicList,setMusicList] = useState([
  {
      id: 0,
      name: "Shakedown",
      author_name: "Clarx",
      img: "shakedown.jpg",
      lang: "ENGLISH",
      timesPlayed: 0,
      type: "electronic",
      musicName: "Clarx - Shakedown [NCS Release].mp3",
     
  },
  {
      id: 1,
      name: "Games Worldbeat",
      author_name: "Bernardo R.",
      img: "notAvailable.jpg",
      lang: null,
      timesPlayed: 0,
      type:"instrumental",
      musicName: "mixkit-games-worldbeat-466.mp3",
     
  },])

  console.log(musicList)
 const searchForMusic = ()=>{}
  return (
    <div className='Home'>
        <div className="container-fluid">
            <div className="row">
                <div className="aside col-4">
                   <Sidebar/>
                </div>
                <div className="music col-8">
                    <input type="search" name="musicSerch" id="musicSerch" placeholder='what are you looking for?' onChange={searchForMusic} />
                    {
                      musicList.map(music =>{
                        return(
                          <MusicCard music={music} key={music.id} /> 
                        )
                      })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home