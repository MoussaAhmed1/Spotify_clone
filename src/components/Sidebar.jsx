import React from 'react'
import './css/Sidebar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Sidebar() {

  const {playlists} = useSelector(state=>state.user);
  return (
    <section className='side-bar'>
        <ul>
            <li><Link to="/"> <i className="fa-solid fa-house"></i> Home</Link></li>
            <li><Link > <i className="fa-solid fa-user"></i> Profile</Link></li>
            <li><Link to="/likes"> <i className="fa-solid fa-heart"></i> liked song</Link></li>
            <li><Link to="/createPlayList"> <i className="fa-solid fa-plus"></i> create playlist</Link></li>           
        </ul>       
        <hr />
        <ul>
          

          {
           playlists.map((playlist)=>{
           return(
           <li key={playlist.id}><Link to={`playlists/:${playlist.id}`}><i className="fa-solid fa-headphones m-2"></i>{playlist.name}</Link></li>
           )
           })
           
          }
        </ul>
    </section>
  )
}
