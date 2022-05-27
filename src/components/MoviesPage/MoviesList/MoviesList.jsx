import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/movies-api';
import MoviesListItem from '../MoviesListItem';
import s from './MoviesList.module.css';
import { toast } from 'react-toastify';

function MoviesList({searchQuery}) {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    // const handleLoadMore = () => {
    //     setPage(prevState => prevState + 1);
    // }

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        
        // if (query !== searchQuery && page > 1) {
        //     setImages([]);
        //     setPage(1);
        //     setTotalHits(1);
        //     return;
        // }

        fetchMovies(searchQuery)
            .then(data => {
                if (data.total_results > 0) {
                    if (page === 1) {
                        console.log(data);
                        setMovies(data.results);
                        return toast.success(`Hooray! We found ${searchQuery}.`);
                    }

                    
                    // if (page > 1) {
                    //     setMovies(prevState => [...prevState, ...data.results]);
                    // }
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