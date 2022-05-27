import PropTypes from 'prop-types';
import s from './HomePage.module.css';
import Container from 'components/Container';
import Title from './Title';
import TrendingMovies from './TrendingMovies';

export default function HomePage() {
    return <div>
        <Title text={'Trending today'} />
        <TrendingMovies/>
    </div>
}

// HomePage.propTypes = {
//     children: PropTypes.node,
// }