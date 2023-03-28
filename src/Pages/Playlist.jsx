import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Playlist() {
  const {id} = useParams();
    const {playlists} = useSelector(state=>state.user)
    console.log(playlists)
  return <div>Playlist</div>;
}
