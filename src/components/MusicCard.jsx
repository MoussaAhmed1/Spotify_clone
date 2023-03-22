import React  from 'react'
import './css/MusicCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetCurrent, SetIsPlayed } from './../Redux/actions/musicAction';
export default function MusicCard({music}) {
  const dispatch = useDispatch();
  const {isPlayed} = useSelector(state=>state.music)
   const play = (music)=>{
     dispatch((SetCurrent(music)))
     dispatch((SetIsPlayed(true)))
   }
   const {name, img, author_name} = music;
  return (
    <div className='music-card' onClick={()=>play(music)}>
        <div className="img-wrapper">
        <img  src={require(`../assets/musicImgs/${img}`)} alt={name} />
        <div className='playIcon' onClick={()=>play(music)}>
        <i className="fa-sharp fa-solid fa-circle-play"></i>
        </div>
        </div>
        <h5>{name.length >12 ? name.substring(0,15) + "..." : name}</h5>
        <p>{author_name}</p>
        
    </div>
  )
}
