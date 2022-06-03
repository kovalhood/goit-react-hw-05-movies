import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesListItem.module.css';

export default function MoviesListItem({ data }) {
  const location = useLocation();
    return (
      data.map(({ title, id }) => (
          <li className={s.item} key={id}>
              <Link to={`/movies/${id}`} state={{from:location}} className={s.link}>{title}</Link>
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