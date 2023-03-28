const init = {
    userName:"",
    password:"",
    img:null,
    musicLists:{},
    likes:[],
    playlists:[
        {id:0,name:"AtHome",songs:[]},
        {id:1,name:"AtWork",songs:[]}
    ]
}

const userReducer = (state=init,action)=>{
    switch(action.type)
    {
        case"Set_user":
        return{
            state:action.payload,            
        }

        case"ADD_PLAYLIST":
        return{
            ...state,
            playlists:action.payload,            
        }
        
        default:
            return state;
    }
}
export default userReducer;