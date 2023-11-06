export const increment_number = (num)=>{
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrement_number = (num)=>{
    return {
        type:"DECREMENT",
        payload: num
    }
}