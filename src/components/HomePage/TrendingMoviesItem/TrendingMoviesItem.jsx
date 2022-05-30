import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './TrendingMoviesItem.module.css';

export default function TrendingMoviesItem({ data }) {

  return (
    data.map(({ title, id }) => (
      <li className={s.item} key={id}>
        <Link to={`/movies/${id}`} className={s.link}>{title}</Link>
      </li>
    ))
  )
}

TrendingMoviesItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};