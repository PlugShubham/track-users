import { FETCH_USERS,NEW_USER} from '../actions/types';

const initialState = {
    items:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                items:action.payload
            }
        case NEW_USER:
        return {
            ...state,
            items:[...state.items,action.payload]
        }    
        default:
            return state;    
    }
}