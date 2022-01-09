const initialState = {
    text:''
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case "Name":
            return {text: action.data}
        default:
            return state
    }
}

export default rootReducer