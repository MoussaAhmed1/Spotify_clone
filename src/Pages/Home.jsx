import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import './css/Home.css';
import MusicCard from '../components/MusicCard';
import { useSelector } from 'react-redux';
function Home() {
 const {musicList} = useSelector(state=>state);
console.log(musicList)
 const searchForMusic = ()=>{}
  return (
    <div className='Home'>
        <div className="container-fluid">
            <div className="row">
                <div className="aside col-4">
                   <Sidebar/>
                </div>
                <main className="music-main-section col-8">
                    <div className="row">
                    <input type="search" name="musicSerch" id="musicSerch" placeholder='what are you looking for?' onChange={searchForMusic} />
                    </div>
                  <div className="music-main-section-content">
                    {
                      !!musicList &&
                      musicList.map(music =>{
                        return(
                          
                            <MusicCard music={music} key={music.id} /> 
                       
                        )
                      })
                    }
                  </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Home