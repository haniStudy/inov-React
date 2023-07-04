const MainArticle = () => {
    return (
        <article className='main-article'>
            <section className='main-article-section'>
                <p>Done..! 🎉</p>
                <ul>
                    {
                        [...todo.todo].filter(function (item) {
                            return item.isDone === true
                        }).map(function (item) {
                            return (
                                <li className='main-article-section-li'>
                                    <div className='li-top'>
                                        <span className='li-title'>{item.title}</span>
                                        <span className='li-content'>{item.content}</span>
                                    </div>
                                    <div className='li-bottom'>
                                        <button className='li-delete-btn' onClick={() => {
                                            dispatch(deleteTodo(item.uuid));
                                        }}>
                                            삭제하기
                                        </button>
                                        <button className='li-toggle-btn' onClick={() => {
                                            dispatch(toggleState(item.uuid));
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
    )
}

export default MainArticle