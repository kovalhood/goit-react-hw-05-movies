import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/movies-api';
import MoviesListItem from '../MoviesListItem';
import s from './MoviesList.module.css';
import { toast } from 'react-toastify';

function MoviesList({searchQuery}) {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }

        fetchMovies(searchQuery)
            .then(data => {
                if (data.total_results > 0) {
                    if (page === 1) {
                        setMovies(data.results);
                        return toast.success(`Hooray! We found ${searchQuery}.`);
                    }
                }
                
                else {
                    setMovies([]);
                    return toast.error("Sorry, there are no images matching your search query. Please try again.");
                }
            });
        
        setQuery(searchQuery);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])
        
    return <ul className={s.gallery}>
        <MoviesListItem data={ movies }/>
    </ul>
}

export default MoviesList;