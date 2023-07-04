import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Article from '../components/Article';
import '../reset.css';
import * as H from "../styles/HomeStyle";

function Home() {
    const todoList = useSelector((state) => state.todoList); // 스토어에서 조회
    const dispatch = useDispatch();

    return (
        <H.Main>
            <Header todoList={todoList} dispatch={dispatch}/>
            <Article todoList={todoList} dispatch={dispatch}/>
        </H.Main>
    )
}
export default Home;