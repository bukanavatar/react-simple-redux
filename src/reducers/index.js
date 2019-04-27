import { combineReducers } from 'redux';
import { SELECT_SONG } from '../constant/types'

const songsReducer = () =>{
    return [
        { name:'main actor', artist:'Minami', duration:'3:29' },
        { name:'Uta ni Katachi wa nai Keredo', artist:'Hanatan', duration:'4:43' },
        { name:'Howling', artist:'Flow X GRANDRODEO', duration:'2:23' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === SELECT_SONG){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songsList:songsReducer,
    selectedSong:selectedSongReducer
});