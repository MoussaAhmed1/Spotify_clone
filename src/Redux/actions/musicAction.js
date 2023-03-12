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