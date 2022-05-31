import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movies-api';
import { genresNames } from 'services/genres-names';
import { Link } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [pageIndex, setPageIndex] = useState(null);

    const navigate = useNavigate();

    // Setting page index for Go back button
    useEffect(() => {
        // Setting page index only if we visited previous pages in current session
        if (window.history.state.idx > 0) {
            setPageIndex(window.history.state.idx-1)
        }
    },[])

    useEffect(() => {
        fetchMovieDetails(movieId)
            .then(data => {
                normalizedData(data);
                setMovie(data);
                console.log(data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    function normalizedData(results) {
        createGenres(genresNames, results.genres);
        
        return results;
    }

    function createGenres(arrayID, genresID) {
        let arrayOfGenres = [];

        return arrayID.map(element => {
            if (genresID.includes(element.id)) {
                arrayOfGenres.push(element.name);
            }

            return arrayOfGenres;
        });
    }

    function goBackHandle() {
        if (pageIndex === null) {
            //Go back functionality for first load of page from address bar
            navigate('/', { replace: true });
            return;
        }

        if (window.history.state && window.history.state.idx > 0) {
            // On description page if we click on Cast or Reviews we 
            // are changing history index, so for proper Go back button functionality 
            // we have to count difference between current history index 
            // and history index on page mount
            navigate(-`${window.history.state.idx-pageIndex}`);
        }
    }

    return <>
        <button onClick={ goBackHandle }>Go back</button>
        {movie &&
            <div className={s.details}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className={s.image}/>
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.tagline}</p>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <h2>Release</h2>
                    <p>{parseInt(movie.release_date)}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <ul className={s.genres}>
                        {movie.genres.map(({ id, name }) => (
                            <li className={s.genres__item} key={id}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        <hr />
        <div>
            <p>Additional information</p>
            <Link to={`/movies/${movieId}/cast`} className={s.link}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`} className={s.link}>Reviews</Link>
        </div>
        <hr />
        <Outlet/>
    </>
}