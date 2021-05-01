import {
    LIKE_MOVIE,
    MOVIES,
    SHOW_MOVIE
} from '../actions/types';
import axios from 'axios';
import { Dispatch } from 'redux';
import config from '../config';

export const getMovies = () => async (dispatch: Dispatch) => {
    const response = await axios.get(`${config.PATH}/movie`)
    dispatch({
        type: MOVIES,
        payload: response.data
    })
}

export const getMoviesType = (type: string) => async (dispatch: Dispatch) => {
    const response = await axios.get(`${config.PATH}/movie/${type}`)
    dispatch({
        type: SHOW_MOVIE,
        payload: response.data
    })
}

export const like = (id: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: LIKE_MOVIE,
        payload: id
    })
}