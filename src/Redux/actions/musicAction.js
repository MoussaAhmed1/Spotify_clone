export const setMusic = (data)=>{
    return{
        type:"SET_MUSIC",
        payload:data
    }
}

export const setFavorite = (data)=>{
    return{
        type:"SET_FAVORITE",
        payload:data
    }
}

export const setPlaylist = (data)=>{
    return{
        type:"SET_PLAYLIST",
        payload:data
    }
}
export const SetCurrent = (data)=>{
    return{
        type:"SET_CURRENT_MUSIC",
        payload:data
    }
}
export const SetIsPlayed= data=>{
    return{
        type:"IS_PLAYED",
        payload:data
    }
}