import { useState, useEffect } from 'react';
import TrendingMoviesItem from 'components/HomePage/TrendingMoviesItem';
import { fetchTrendingMovies, fetchMovieReviews } from 'services/movies-api';
import PropTypes from 'prop-types';
import s from './TrendingMovies.module.css';

export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(data => {
                setMovies(data.results);
            });
    }, [])

    return <ul className={s.gallery}>
        <TrendingMoviesItem data={movies} />
    </ul>
}

// TrendingMovies.propTypes = {
//     text: PropTypes.string.isRequired,
// }
