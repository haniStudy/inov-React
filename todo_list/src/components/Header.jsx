import React, { useEffect } from 'react';
import { addTodo } from '../redux/modules/todoList';
import { useInput } from '../hooks/useInput';
import * as H from "../styles/HomeStyle";

const Header = ({ todoList, dispatch }) => {
    const [title, setTitle, handleChangeTitle] = useInput(''); // 할 일 제목
    const [content, setContent, handleChangeContent] = useInput(''); // 할 일 내용

    useEffect(() => { // 새로운 할 일 목록이 추가 되면 입력되었던 값 초기화
        setTitle("");
        setContent("");
    }, [todoList]);

    return (
        <H.Header>
            <H.HeaderTitle>
                <span>TodoList</span>
            </H.HeaderTitle>
            <H.HeaderSection>
                <H.HeaderSectionDiv>
                    <label> 제목 </label> <H.HeaderSectionInput type='text' value={title} onChange={handleChangeTitle} />
                    <label> 내용 </label> <H.HeaderSectionInput type='text' value={content} onChange={handleChangeContent} />
                    </H.HeaderSectionDiv>
                <H.HeaderSectionButton onClick={() => { dispatch(addTodo({ title, content })) }}>추가하기</H.HeaderSectionButton>
            </H.HeaderSection>
        </H.Header>
    )
};

export default Header;