import React from 'react'
import './css/Sidebar.css'
export default function Sidebar() {
  return (
    <section className='side-bar'>
        <ul>
            <li> <i className="fa-solid fa-house"></i> Home</li>
            <li> <i className="fa-solid fa-heart"></i> liked song</li>
            <li> <i className="fa-solid fa-plus"></i> create playlist</li>           
        </ul>       
        <hr />
        <ul>
            <li><i className="fa-solid fa-headphones"></i> My playlist#1</li>
            <li><i className="fa-solid fa-headphones"></i> My playlist#2</li>
        </ul>
    </section>
  )
}
