import PropTypes from 'prop-types';
import s from './TrendingMoviesItem.module.css';

export default function TrendingMoviesItem({data}) {

    return (
    data.map(({ title, id }) => (
        <li className={s.item} key={id}>
            <a href='' className={s.link}>{title}</a>
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