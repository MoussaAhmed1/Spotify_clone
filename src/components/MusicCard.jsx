import React  from 'react'
import './css/MusicCard.css';
export default function MusicCard({music}) {
   const play = ()=>{}
   const {name, img, author_name} = music;
  return (
    <div className='music-card' onClick={play}>
        <div className="img-wrapper">
        <img  src={require(`../assets/musicImgs/${img}`)} alt={name} />
        <div className='playIcon' onClick={play}>
        <i class="fa-sharp fa-solid fa-circle-play"></i>
        </div>
        </div>
        <h5>{name.length >12 ? name.substring(0,15) + "..." : name}</h5>
        <p>{author_name}</p>
        
    </div>
  )
}
