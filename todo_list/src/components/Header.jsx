import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todoList';
import { useInput } from '../hooks/useInput';
import * as H from "../styles/HomeStyle";

const Header = () => {
    const [title, setTitle, handleChangeTitle] = useInput(''); // 할 일 제목
    const [content, setContent, handleChangeContent] = useInput(''); // 할 일 내용

    const dispatch = useDispatch();
    const handleAddBtnClick = () => {
        dispatch(addTodo({ title, content }));
        setTitle('');
        setContent('');
    };

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
                <H.HeaderSectionButton onClick={handleAddBtnClick}>추가하기</H.HeaderSectionButton>
            </H.HeaderSection>
        </H.Header>
    )
};

export default Header;