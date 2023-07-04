const Header = () => {
    return (
        <header>
            <section className='header-title'>
                <span>TodoList</span>
            </section>
            <section className='header-section'>
                <div className='header-section-div'>
                    <label>제목</label><input name="title" value={title} onChange={handleChangeInput} />
                    <label>내용</label><input name="content" value={content} onChange={handleChangeInput} />
                </div>
                <button onClick={() => {
                    dispatch(addTodo({ title, content }));
                    setTitle("");
                    setContent("");
                }}>
                    추가하기
                </button>
            </section>
        </header>
    )
}

export default Header