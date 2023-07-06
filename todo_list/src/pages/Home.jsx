import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, updateTodo } from '../redux/modules/todoList';
import * as S from "../styles/DetailStyled"

function Home() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const titleRef = useRef(null);

    const dispatch = useDispatch();
    const todo = useSelector((state) => {
        return state.todoList;
    })

    console.log("Home 렌더링");
    useEffect(() => {
        titleRef.current = title;
    }, [title]);

    // const handleChangeInput = (event) => {
    //     // input태그의 name에 맞게 event처리
    //     inputRef.current = event.target.value;
    //     console.log(inputRef.current);
    //     console.log(event.target.name);
    //     (event.target.name === "title") ? setTitle(inputRef.current) : setContent(inputRef.current);
    // }

    const handleTitleChange = (event) => {
        titleRef.current = event.target.value;        
    }
    
    console.log(titleRef.current);
    return (
        <main>
            <header>
                <section className='header-title'>
                    <span>TodoList</span>
                </section>
                <section className='header-section'>
                    <div className='header-section-div'>
                        <label>제목</label><input name="title" ref={titleRef} onChange={handleTitleChange}/>
                        <label>내용</label><input name="content" value={content} />
                    </div>
                    <button onClick={() => {
                        const title2 = titleRef.current.value;
                        console.log(title2);
                        dispatch(createTodo({ title2, content }));
                        setTitle("");
                        setContent("");
                    }}>
                        추가하기
                    </button>
                </section>
            </header>
            <article className='main-article'>
                <section className='main-article-section'>
                    <p>Working.. 🔥</p>
                    <ul>
                        {
                            [...todo.todo].filter(function (item) {
                                return item.isDone === false
                            }).map(function (item) {
                                return (
                                    <li className='main-article-section-li'>
                                        <div className='li-top' key={item.id}>
                                            <div className='li-title'>
                                                <p>{item.title}</p>
                                                <button>
                                                    <S.StyledLink to={`/detail/${item.uuid}`}>
                                                        상세
                                                    </S.StyledLink>
                                                </button>
                                            </div>
                                            <div className='li-content'>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                        <div className='li-bottom'>
                                            <button className='li-delete-btn' onClick={() => {
                                                dispatch(deleteTodo(item.uuid));
                                            }}>
                                                삭제하기
                                            </button>
                                            <button className='li-toggle-btn' onClick={() => {
                                                dispatch(updateTodo(item.uuid));
                                            }}>완료
                                            </button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className='main-article-section'>
                    <p>Done..! 🎉</p>
                    <ul>
                        {
                            [...todo.todo].filter(function (item) {
                                return item.isDone === true
                            }).map(function (item) {
                                return (
                                    <li className='main-article-section-li'>
                                        <div className='li-top' key={item.id}>
                                            <div className='li-title'>
                                                <p>{item.title}</p>
                                                <button>
                                                    <S.StyledLink to={`/detail/${item.uuid}`}>
                                                        상세
                                                    </S.StyledLink>
                                                </button>
                                            </div>
                                            <div className='li-content'>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                        <div className='li-bottom'>
                                            <button className='li-delete-btn' onClick={() => {
                                                dispatch(deleteTodo(item.uuid));
                                            }}>
                                                삭제하기
                                            </button>
                                            <button className='li-toggle-btn' onClick={() => {
                                                dispatch(updateTodo(item.uuid));
                                            }}>취소
                                            </button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default Home