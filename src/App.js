import { useState } from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import HomePage from 'components/HomePage';
import MoviesPage from 'components/MoviesPage';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import styles from './services/styles'


function App() {

    return (
        <Wrapper>
            <Section>
                <HomePage />
                <MoviesPage/>
            </Section>

            {/* Notifications */}
            <ToastContainer autoClose={3000} theme="colored" />
        </Wrapper>
    )
}

export default App;