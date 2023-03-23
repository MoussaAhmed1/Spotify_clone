import React, { useEffect, useState } from 'react'
import defaultImg from '../assets/images/defaultImg.jpg'
import "./css/createplaylist.css"
import { useSelector, useDispatch } from 'react-redux';
import { Addplaylist } from '../Redux/actions/userActions';
function CreatePlayList() {
    const [playlistName,setPlayListName] = useState("PlayList#Name");
    const {musicList:songs} = useSelector(state=>state.music);
    const [songAtPlaylist,AddSongToPlaylist]  = useState([]);
    const dispatch = useDispatch();
    const {playlists} = useSelector(state=>state.user)
  
    const onsubmit = (e)=>{
      e.preventDefault();
      //call dispatch to save the playlist
      const playlist = {id:(playlists.length),name:playlistName,songs:songAtPlaylist};
      dispatch(Addplaylist([...playlists,playlist]));
      
      
    }
    
  return (
    <form onSubmit={e=>onsubmit(e)}>
    
    <div className='create-playlist'>
        <div className="img-wrapper">
            <img src={defaultImg} alt="defaultimg" />
        <input type="file" name="playListimg" id="" />
        </div>
         
        {/* <h1>playList#Name</h1> */}
        <input type="text" name="playlistName" value={playlistName} onChange={(e)=>setPlayListName(e.target.value)} />

        <button type='submit' className="btn btn-secondary save">Save</button>
    </div>
    <hr />
    <div className='recommended'>
        <h3>Songs to be added</h3>
        {
          !!songs?
          songs.map(song=>{
            return(
            <div className='song-box' key={song.id}>
              <div className="img-wrapper m-3">
                <img src={require(`../assets/musicImgs/${song.img}`)} alt="" />
              </div>
              <div>
              <h5>{song.name}</h5>
              <h6>{song.author_name}</h6>

              </div>
              <button type='button' className='add btn btn-success' onClick={()=>AddSongToPlaylist([...songAtPlaylist,song])}>Add</button>
            </div>
            )
          })
          :
            "there is no recommended songs "
        }
    </div>
    </form>
  )
}

export default CreatePlayList