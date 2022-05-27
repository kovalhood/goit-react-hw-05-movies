export function fetchTrendingMovies(page="1") {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const PATH_PARAMS = '/trending/movie/week';
    const API_KEY = '?api_key=387a2500e741e87c896db50117c25d75'
    // const searchParams = 'image_type=photo&orientation=horizontal&per_page=12';

    return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
        .then(response => response.json())
    
    // return fetch(`${BASE_URL}${API_KEY}&q=${query}&page=${page}&${searchParams}`)
    //     .then(response => response.json())
    
}