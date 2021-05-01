import {
    LIKE_MOVIE,
    MOVIES
} from '../actions/types';

export interface IMovie {
    _id: string,
    title: string,
    year: string,
    type: string,
    like: number;
}

interface IInitial {
    movies: IMovie[]
}

const intitialState: IInitial | undefined = undefined;

export default function (state = intitialState, action: any) {
    switch (action.type) {
        case LIKE_MOVIE:
            return {
                ...state,
                movies: state && state.movies.map(i => i._id === action.payload 
                    ? {...i, like: i.like + 1} 
                    : i
                )
            }
        case MOVIES:
            const data = action.payload.movies as IMovie[];
            return {
                ...state,
                movies: data.map( i => ({ ...i, like: 0 }))
            }
        default:
            return {};
    }
}