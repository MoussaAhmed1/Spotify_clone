import musicDB from './../../assets/db/music';

const intial = {
    musicList:musicDB,
    currentMusicPlayed:musicDB[0],
    playLists:{},
    isPlayed:false,
}

const  musicReducer = (state=intial,action)=>{
    switch(action.type){
        case 'SET_MUSIC':
        return {
            ...state,
            musicList:action.payload
        }
        case 'SET_FAVORITES':
            return {
               ...state,
               currentMusicPlayed:action.payload
            }
            case 'SET_CURRENT_MUSIC':
                return{
                    ...state,
                    currentMusicPlayed:action.payload
                }
                case "SET_PLAYLIST":
                    return{
                        ...state,
                        playList:action.payload
                    }
                    case "IS_PLAYED":
                        return{
                            ...state,
                            isPlayed:action.payload
                        }
                default:
                    return state;
}
}

export default musicReducer;