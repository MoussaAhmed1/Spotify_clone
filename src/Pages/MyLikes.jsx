import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import MusicCard from '../components/MusicCard';

function MyLikes() {
   const {musicList} = useSelector(state=>state.music)

  return (
    <div>
        <div className="music-main-section-content">
        {!!musicList &&
          musicList.filter(music=>{
            if(music.isLiked)
            return music;
            
          }).map((music) => {
            return <MusicCard music={music} key={music.id} />;
          })}
      </div>
    </div>
  )
}

export default MyLikes  