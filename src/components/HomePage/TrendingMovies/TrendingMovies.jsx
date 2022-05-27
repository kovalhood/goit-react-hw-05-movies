import { useState, useEffect } from 'react';
import TrendingMoviesItem from 'components/HomePage/TrendingMoviesItem';
import { fetchTrendingMovies } from 'services/trending-movies-api';
import PropTypes from 'prop-types';
import s from './TrendingMovies.module.css';

export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(data => {            
                console.log(data);
                setMovies(data.results);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <ul className={s.gallery}>
        <TrendingMoviesItem data={movies} />
    </ul>
}

// TrendingMovies.propTypes = {
//     text: PropTypes.string.isRequired,
// }