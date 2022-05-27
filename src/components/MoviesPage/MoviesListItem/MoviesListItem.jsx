import PropTypes from 'prop-types';
import s from './MoviesListItem.module.css';

export default function MoviesListItem({data}) {

    return (
    data.map(({ title, id }) => (
        <li className={s.item} key={id}>
            <a href='' className={s.link}>{title}</a>
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