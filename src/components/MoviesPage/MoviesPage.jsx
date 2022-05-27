import { useState, useEffect } from 'react';
import SearchField from './SearchField';
import MoviesList from './MoviesList';
import PropTypes from 'prop-types';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Catching search query from search bar input field
    const handleSubmit = searchQueryValue => {
        if (searchQuery === searchQueryValue) {
            // return toast.info("Input new search query.");
        }

        setSearchQuery(searchQueryValue);
}

    return <div>
        <SearchField onSubmit={handleSubmit} />
        <MoviesList searchQuery={ searchQuery }/>
    </div>
}
