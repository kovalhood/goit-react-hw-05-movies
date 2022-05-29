const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=387a2500e741e87c896db50117c25d75'

export function fetchTrendingMovies(page="1") {
    const PATH_PARAMS = '/trending/movie/week';

    return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
        .then(response => response.json())
}

export function fetchMovies(searchQuery, page = "1") {
    const PATH_PARAMS = '/search/movie';
    const searchParams = '&language=en-US&include_adult=false';

    return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
        .then(response => response.json())
}

export function fetchMovieDetails(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
        .then(response => response.json())
}

export function fetchMovieCredits(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
        .then(response => response.json())
}

export function fetchMovieReviews(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
        .then(response => response.json())
}