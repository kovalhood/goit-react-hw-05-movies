import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
    return <header>
        <Navigation link={'/'} title={'Home'} />
        <Navigation link={'/movies'} title={'Movies'} />
    </header>
}