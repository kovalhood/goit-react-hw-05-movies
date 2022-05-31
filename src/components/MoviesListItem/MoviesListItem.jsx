import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MoviesListItem.module.css';

export default function MoviesListItem({data}) {

    return (
      data.map(({ title, id }) => (
          <li className={s.item} key={id}>
              <Link to={`/movies/${id}`} className={s.link}>{title}</Link>
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