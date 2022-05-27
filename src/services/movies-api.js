export function fetchMovies(searchQuery, page="1") {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const PATH_PARAMS = '/search/movie';
    const API_KEY = '?api_key=387a2500e741e87c896db50117c25d75'
    const searchParams = '&language=en-US&include_adult=false';

    return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
        .then(response => response.json())
    
    // return fetch(`${BASE_URL}${API_KEY}&q=${query}&page=${page}&${searchParams}`)
    //     .then(response => response.json())
    
}