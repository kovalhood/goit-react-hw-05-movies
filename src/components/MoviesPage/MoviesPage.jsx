import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchField from './SearchField';
import MoviesList from './MoviesList';
import { toast } from 'react-toastify';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Catching search query from address bar
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') ?? '';

    // Catching search query from search bar input field
    const handleSubmit = searchQueryValue => {
        if (searchQuery === searchQueryValue) {
            return toast.info("Input new search query.");
        }

        navigate(`${location.pathname}?query=${searchQueryValue}`);

        setSearchQuery(searchQueryValue);
    }

    // Setting search query from address bar
    useEffect(() => {
        if (query !== '') {
            setSearchQuery(query);
        }
    }, [query])

    return <div>
        <SearchField onSubmit={handleSubmit}/>
        <MoviesList searchQuery={ searchQuery }/>
    </div>
}
