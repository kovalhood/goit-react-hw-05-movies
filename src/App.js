import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import Container from "components/Container";
import AppBar from 'components/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from 'react-scroll-up';
import styles from './services/styles'
import sprite from './images/icons.svg'

const HomePage = lazy(() => import('components/HomePage' /* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import('components/MoviesPage' /* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */))
const Cast = lazy(() => import('components/MovieDetailsPage/Cast' /* webpackChunkName: "cast" */))
const Reviews = lazy(()=>import('components/MovieDetailsPage/Reviews' /* webpackChunkName: "reviews" */))

export default function App() {
    return (
        <Wrapper>
            <AppBar />
            <Section>
                <Routes>
                    <Route index element={<Container><Suspense fallback={<BeatLoader/>}><HomePage /></Suspense></Container>} />
                    <Route path='/movies' element={<Container><Suspense fallback={<BeatLoader/>}><MoviesPage /></Suspense></Container>}/>
                    <Route path='/movies/:movieId' element={<Container><Suspense fallback={<BeatLoader/>}><MovieDetailsPage /></Suspense></Container>}>
                        <Route path='/movies/:movieId/cast' element={<Suspense fallback={<BeatLoader/>}><Cast/></Suspense>}/>
                        <Route path='/movies/:movieId/reviews' element={<Suspense fallback={<BeatLoader/>}><Reviews/></Suspense>} />
                    </Route>
                    <Route path='*'element={<HomePage/>}/>
                </Routes>
            </Section>

            {/* Notifications */}
            <ScrollToTop showUnder={100} style={styles.upButton}>
                <svg style={{ fill: '#EF6401' }} width="16" height="16" aria-label="logo">
                    <use href={`${sprite}#arrow-up`}></use>
                </svg>
            </ScrollToTop>
            <ToastContainer autoClose={3000} theme="colored" />
        </Wrapper>
    )
}