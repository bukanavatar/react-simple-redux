import { SELECT_SONG } from '../constant/types';


export const selectSong = (song) => {
    return {
        type:SELECT_SONG,
        payload:song
    }
}