import { useState } from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import AppBar from 'components/AppBar';
import HomePage from 'components/HomePage';
import MoviesPage from 'components/MoviesPage';
import MovieDetailsPage from 'components/MovieDetailsPage';
import Cast from 'components/MovieDetailsPage/Cast';
import Reviews from 'components/MovieDetailsPage/Reviews';
// import NotFoundView from 'views/NotFoundView';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
// import styles from './services/styles'


function App() {

    return (
        <Wrapper>
            <Section>
                <AppBar />
                
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />}/>
                    <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
                        <Route path='/movies/:movieId/cast' element={<Cast/>}/>
                        <Route path='/movies/:movieId/reviews' element={<Reviews/>} />
                    </Route>
                    <Route path='*'element={<HomePage/>}/>
                </Routes>
            </Section>

            {/* Notifications */}
            <ToastContainer autoClose={3000} theme="colored" />
        </Wrapper>
    )
}

export default App;