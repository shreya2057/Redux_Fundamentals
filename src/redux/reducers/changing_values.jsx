const initial_state = 0

const change_number = (state = initial_state, action)=>{
    switch(action.type){
        case "INCREMENT":  return state + action.payload
        
        case "DECREMENT": return state - action.payload
        
        default: return state
    }
}

export default change_number;