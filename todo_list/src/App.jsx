import React from 'react';
import './reset.css';
import './App.css'

function App() {

  return (
    <wrapper>
      <header>
        <section className='header-title'>
          <span>TodoList</span>
        </section>

        <section className='header-section'>
          <div className='header-section-div'>
            <label> 제목 </label> <input />
            <label> 내용 </label> <input />
          </div>
          <button>추가하기</button>
        </section>
      </header>

      <article className='main-article'>
        <section className='main-article-section'>
          <p>Working.. 🔥</p>
          <ul>
            <li className='main-article-section-li'>
              <div className='li-top'>
                <span className='li-title'>title</span>
                <span className='li-content'>content</span>
              </div>
              <div className='li-bottom'>
                <button className='li-delete-btn'>삭제하기</button>
                <button className='li-toggle-btn'>완료</button>
              </div>
            </li>
            <li className='main-article-section-li'>
              <div className='li-top'>
                <span className='li-title' >ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</span>
                <span className='li-content'>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㅇㅇㅇㅇㅁㅁㅁㅁㅁㅁ</span>
              </div>
              <div className='li-bottom'>
                <button className='li-delete-btn'>삭제하기</button>
                <button className='li-toggle-btn'>완료</button>
              </div>
            </li>
          </ul>
        </section>
        <section className='main-article-section'>
          <p>Done..! 🎉</p>
          <ul>
            <li className='main-article-section-li'>
              <div className='li-top'>
                <span className='li-title' >ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</span>
                <span className='li-content'>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㅇㅇㅇㅇㅁㅁㅁㅁㅁㅁ</span>
              </div>
              <div className='li-bottom'>
                <button className='li-delete-btn'>삭제하기</button>
                <button className='li-toggle-btn'>완료</button>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </wrapper>
  )
}

export default App