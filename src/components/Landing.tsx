import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, like } from '../actions/MoviesActions';
import { IMovie } from '../reducers/moviesReducer';

interface IStateMovieReducer {
    moviesReducer: {
        movies: IMovie[]
    };
}

const classCard = {
    boxShadow: '0 4px 8px 0',
    transition: '0.3s',
}

const classContainer = {
    padding: '2px 16px',
}
export const Landing = () => {
    let moviesData: IMovie[]  = []; 

    const dispatch = useDispatch();
    const moviesReducer = useSelector((state: IStateMovieReducer) => state.moviesReducer );
    const [counter, setCounter] = useState<number>(0);
    useEffect(() => {
        dispatch(getMovies());
    }, [])
    if(!moviesReducer.movies){
        return null;
    }
    moviesData = moviesReducer.movies;

    const hanleClickCounter = async() => {
        setCounter(counter + 1);
    }

    const items = moviesData.map((item, _i) => {
        const handleLike = () => {
            dispatch(like(item._id));
        }
        return(
            <Fragment key={item._id}>
                <div style={classContainer}>
                    <h4><b>{item.title}</b></h4>
                    <p>{item.type}</p>
                </div>
                <button onClick={handleLike}>Like {item.like || 0}</button>
                <hr/>
            </Fragment>
        );
    });
    return (
        <Fragment>
            <button onClick={hanleClickCounter}>Visitas {counter}</button>
            <div style={classCard}>
                {items}
            </div>
        </Fragment>
    );
}

export default Landing;
