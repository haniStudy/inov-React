const ListSection = () => {
    return (
        <section className='main-article-section'>
            <p>Working.. 🔥</p>
            <ul>
                {
                    [...todo.todo].filter(function (item) {
                        return item.isDone === false
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
                                    }}>완료
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}