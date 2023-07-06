import React from 'react'
import Header from '../components/Header';
import Article from '../components/Article';
import '../reset.css';
import * as H from "../styles/HomeStyle";

function Home() {
    return (
        <H.Main>
            <Header />
            <Article />
        </H.Main>
    )
}
export default Home;