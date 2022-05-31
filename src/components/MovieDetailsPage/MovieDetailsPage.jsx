import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movies-api';
import { genresNames } from 'services/genres-names';
import { Link } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetchMovieDetails(movieId)
            .then(data => {
                normalizedData(data);
                setMovie(data);
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
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        }
        
        else {
            navigate('/', { replace: true });
        }
    }
    
    return <>
        <button onClick={ () => goBackHandle() }>Go back</button>
        {movie &&
            <div className={s.details}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className={s.image}/>
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>User Score: {movie.vote_average * 10}%</p>
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