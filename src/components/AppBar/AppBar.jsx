import Navigation from 'components/AppBar/Navigation';
import Container from "components/Container";
import s from './AppBar.module.css';

export default function AppBar() {
    return <header className={s.header}>
        <div className={s.navigation}>
            <Navigation link={'/'} title={'Home'} />
            <Navigation link={'/movies'} title={'Movies'} />
        </div>
    </header>
}