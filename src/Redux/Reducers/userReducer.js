const init = {
    userName:"",
    password:"",
    img:null,
    musicLists:{},
    likes:[]
}

const userReducer = (state=init,action)=>{
    switch(action)
    {
        case"Set_user":
        return{
            state:action.payload,            
        }
        
        default:
            return state;
    }
}