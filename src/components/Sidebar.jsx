import React from 'react'
import './css/Sidebar.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <section className='side-bar'>
        <ul>
            <li><Link to="/"> <i className="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to="/likes"> <i className="fa-solid fa-user"></i> Profile</Link></li>
            <li><Link> <i className="fa-solid fa-heart"></i> liked song</Link></li>
            <li><Link> <i className="fa-solid fa-plus"></i> create playlist</Link></li>           
        </ul>       
        <hr />
        <ul>
            <li><Link><i className="fa-solid fa-headphones"></i> My playlist#1</Link></li>
            <li><Link><i className="fa-solid fa-headphones"></i> My playlist#2</Link></li>
        </ul>
    </section>
  )
}
