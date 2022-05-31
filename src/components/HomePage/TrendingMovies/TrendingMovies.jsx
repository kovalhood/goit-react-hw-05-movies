import { useState, useEffect } from 'react';
import MoviesListItem from '../../MoviesListItem';
import { fetchTrendingMovies } from 'services/movies-api';
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
        <MoviesListItem data={movies} />
    </ul>
}