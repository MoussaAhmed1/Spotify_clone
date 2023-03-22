import React, { useEffect, useRef, useState } from 'react'
import './css/MusicPlayer.css'
import { useSelector,useDispatch } from 'react-redux';
import { setFavorite, SetIsPlayed } from './../Redux/actions/musicAction';
export default function MusicPlayer() {
    const audioRef = useRef(null)
    const dispatch = useDispatch()
    const {currentMusicPlayed,isPlayed} = useSelector(state=>state.music);
    const [volume,setVolume] = useState(1)
    const [currentTime,setCurrentTime] = useState(0)
    const [duration,setDuration] = useState(0)
    const [ismuted,setIsmuted] = useState(false)
    const {musicFile,name, img, author_name} = currentMusicPlayed; 
    const [isLiked,setIsLiked] = useState(currentMusicPlayed.isLiked)
    //mute the audioRef
    const mute = ()=>{
        setIsmuted(!ismuted)
        console.log("ismuted",ismuted)
        audioRef.current.muted=!ismuted;
    }
    //play the audioRef
    const playAudio = ()=>{
        dispatch(SetIsPlayed(!isPlayed))
        isPlayed?
        audioRef.current.pause()
        :
        audioRef.current.play()
    }
    // put a like 
    const triggerLike=()=>{
       
        setIsLiked(!isLiked);
       currentMusicPlayed.isLiked = isLiked;
       dispatch(setFavorite(currentMusicPlayed))

    }

    const control = (e)=>{
     if( e.target.name === "volume"){
        setVolume(e.target.value)
        audioRef.current.volume = volume;
        console.log(volume);
     }
     else if( e.target.name === "currentTime"){
        setCurrentTime(e.target.value)
        audioRef.current.currentTime = currentTime;
     }
       
    }
    useEffect(()=>{
        if(audioRef.current){
            setDuration(audioRef.current.duration)
            audioRef.current.volume = volume;
        }
        setInterval(() => {
            if (audioRef.current !== null)
            setCurrentTime(audioRef.current.currentTime);
        },1)
        
    },[])

    useEffect(()=>{
       if(isPlayed){

           audioRef.current.play()
           console.log("play")
       }
    },[isPlayed,currentMusicPlayed])

  
    return (
        <div className='music-player'>
        {  
            <div className='music-player-content'>
                <div className='music-info'>
                <img src={require("../assets/musicImgs/"+img)} alt={name} />
                <div className='name-author'>
                <h4>{name}</h4>
                <p>{author_name}</p>
                </div>
                {
                    
                    <i className={`${isLiked?"fa-regular":"fa-solid"} fa-heart`} onClick={triggerLike}></i>   
                   
                }
                </div>
                <div className="Music-player-controls">
                     <audio src={require("../assets/music/"+musicFile)} ref={audioRef}  ></audio>
                     <div>
                        <input type="range" min={0} name="currentTime" id="currentTime" value={currentTime/100} max={duration?duration:2.00} step={(.01)} onChange={e=>control(e)} />
                     </div>
                     <div className="main-controls">
                     <i className="fa-solid fa-forward-step"></i>
                     {
                         
                         <i className={`fa-sharp fa-solid ${isPlayed?'fa-circle-pause':'fa-circle-play'}`} onClick={playAudio}></i>                       
                     }
                     <i className="fa-solid fa-forward-step"></i>
                     <input type="range" min={(0)} id="volum"  name='volume' step={(0.1)} max={1} value={volume} onChange={e=>control(e)} />
                     {

                
                        <i className={`fa-solid ${ismuted?"fa-volume-xmark": "fa-volume-high"}`} onClick={mute}></i>
                      
                     }
                     {/* {  audioRef &&
                         <>
                         <span>{ ( "" + (audioRef.current.currentTime/100) ).slice(0,4)}</span>
                         <span>/</span>
                         <span>{ ( "" + (duration/60) ).slice(0,4)}</span>
                         </> */
                     }
                     </div>
                </div>
            </div>
            
        }

     </div>
  )
}
