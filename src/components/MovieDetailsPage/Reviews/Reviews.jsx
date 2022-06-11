import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movies-api';
import s from './Reviews.module.css';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
    }, [movieId])

    function avatarHandler(avatar) {
        return avatar.includes("https")
            ? avatar.substring(1)
            : `https://image.tmdb.org/t/p/w500${avatar}`
    }

    return <>
        {reviews.length > 0
            ? (<ul className={s.reviews}>
                { reviews.map(({ id, author, content, author_details,created_at }) => (
                    <li className={s.reviews__item} key={id}>
                        <div className={s.author_info}>
                            {author_details.avatar_path
                                ? <img src={avatarHandler(author_details.avatar_path)} alt={author} className={s.avatar} />
                                : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={author} className={s.avatar} />
                            }
                            <div>
                                <h4 className={s.author}>{author}</h4>
                                <p className={s.date}>{new Date(created_at).toLocaleString("en-US", options)}</p>
                            </div>
                        </div>
                        
                        <p className={s.content}>{content}</p>
                    </li>
                ))}
            </ul>)
            : <p>We don't have any reviews for this movie</p>
        }
    </>
}