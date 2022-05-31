import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/movies-api';
import MoviesListItem from '../../MoviesListItem';
import s from './MoviesList.module.css';
import { toast } from 'react-toastify';

export default function MoviesList({searchQuery}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }

        fetchMovies(searchQuery)
            .then(data => {
                if (data.total_results > 0) {
                    setMovies(data.results);
                }

                else {
                    setMovies([]);
                    return toast.error("Sorry, there are no images matching your search query. Please try again.");
                }
            });
    }, [searchQuery])
        
    return <ul className={s.gallery}>
        <MoviesListItem data={ movies }/>
    </ul>
}

MoviesList.propTypes = {
    searchQuery: PropTypes.string,
}