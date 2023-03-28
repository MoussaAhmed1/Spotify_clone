import React, {  useState } from 'react'
import defaultImg from '../assets/images/defaultImg.jpg'
import "./css/createplaylist.css"
import { useSelector, useDispatch } from 'react-redux';
import { Addplaylist } from '../Redux/actions/userActions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SongBox from '../components/SongBox';
function CreatePlayList() {
    const [playlistName,setPlayListName] = useState("");
    const {musicList:songs} = useSelector(state=>state.music);
    const [songAtPlaylist,AddSongToPlaylist]  = useState([]);
    const {playlists} = useSelector(state=>state.user)
    const {id} = useParams();
    const dispatch = useDispatch();
    const [playlistid,setPlaylistid] = useState(id)
   
    const onsubmit = (e)=>{
      e.preventDefault();
      //call dispatch to save the playlist
        const playlist = {id:playlistid,name:playlistName,songs:songAtPlaylist};

        //have you put this play list before ?
        const alreadyExistPlayList =   !!playlists.find(p=>p.id == playlist.id);
       if(alreadyExistPlayList){
        const playlistWithoutRepeated =  playlists.filter(p=>p.id != playlist.id) ;
        playlistWithoutRepeated.push(playlist)
        dispatch(Addplaylist([...playlistWithoutRepeated])); 
       }
       else{
         console.log("New")
         dispatch(Addplaylist([...playlists,playlist]));      

       }
      
    }

    
  
    useEffect(()=>{
      setPlaylistid(id);
      //set the playlist info to be edited
    const currentPlaylist =   playlists.find(p=>p.id == id);
    if(currentPlaylist){
      AddSongToPlaylist(currentPlaylist.songs);
      setPlayListName(currentPlaylist.name)
      
    }  
    else{
      AddSongToPlaylist([]);
      setPlayListName(`Playlist#${id}`)
      
    }
    },[id])

    //remove button
    const RemoveSongFromPlaylistBtn = (id)=>{
     const restOfSongsAtPlaylist =  songAtPlaylist.filter(s=>s.id !=id);
     console.log(restOfSongsAtPlaylist)
     AddSongToPlaylist([...restOfSongsAtPlaylist]);
    }

    //Add to playlist button
    const AddSongToPlaylistBtn = (id)=>{
      //if it's exsit before
      if( !songAtPlaylist.find(s=>s.id ==id) ){ 
        const WantedSong = songs.find(s=>s.id ==id)
        AddSongToPlaylist([...songAtPlaylist,WantedSong]);
      }
    }
  return (
    <form onSubmit={e=>onsubmit(e)}>
    
    <div className='create-playlist'>
        <div className="img-wrapper">
            <img src={defaultImg} alt="defaultimg" />
        <input type="file" name="playListimg" id="" />
        </div>
         
        
        <div>
        <input type="text" name="playlistName" value={playlistName} onChange={(e)=>setPlayListName(e.target.value)} />
        <h5 className='text-light'>{songAtPlaylist.length} Songs</h5>
        </div>

        <button type='submit' className="btn btn-secondary save">Save</button>
    </div>
    <div className='song-box-wrapper'>
    <h3>Songs At this playlist</h3>
    {
      songAtPlaylist.length?
      songAtPlaylist.map(song=>{
        return(
          <SongBox song={song} onclick={RemoveSongFromPlaylistBtn} operation={"Remove"}/>
        )
      })
      :
     <h5>{"no songs added yet"}</h5> 
    }
    </div>
    <hr />
    <div className='song-box-wrapper'>
        <h3>Songs to be added</h3>
        {
          songs.length?
          songs.map(song=>{
          return(<SongBox operation='Add' onclick={AddSongToPlaylistBtn} song={song}/>)
          })
          :
            "there is no recommended songs "
        }
    </div>
    </form>
  )
}

export default CreatePlayList