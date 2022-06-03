import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesListItem.module.css';

export default function MoviesListItem({ data }) {

  console.log(data);

  const location = useLocation();
    return (
      data.map(({ title, id, poster_path, genres }) => (
          <li className={s.item} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
            <div className={s.imageWrapper}>
              <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.image} />
            </div>
            <div className={s.description}>
              <h3 className={s.movie}>{title}</h3>
              {/* <p className={s.rating}>{ vote_average*10+'%'}</p> */}
              <ul className={s.genres}>
                        {genres.map(({ id, name }) => (
                            <li className={s.genres__item} key={id}>
                                {name}
                            </li>
                        ))}
                    </ul>
            </div>
              
            
            </Link>
          </li>
      ))
    )
}

MoviesListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};