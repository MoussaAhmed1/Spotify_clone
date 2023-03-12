import React  from 'react'
import img1 from '../assets/musicimgs/shakedown.jpg'
export default function MusicCard({music}) {
   const play = ()=>{}
   const {name, img, author_name} = music;
  return (
    <div className='music-card' onClick={play}>
        <img  src={img1} alt={name} />
        <h3>{name}</h3>
        <p>{author_name}</p>
    </div>
  )
}
