import { deleteTodo, modifyTodo } from "../redux/modules/todoList";
import { Link } from "react-router-dom";
import * as H from "../styles/HomeStyle";
import StyledLink from "../styles/LinkStyle";

const Section = ({ todoList, condition, dispatch }) => {
    // condition: 할 일 상태 (true: 완료, false: 진행중)
    const sectionName = condition ? "Done..! 🎉" : "Working.. 🔥";
    const btnName = condition ? "취소" : "완료";
    return (
        <H.MainArticleSection>
            <H.SectionP>{sectionName}</H.SectionP>
            <H.SectionUl>
                {todoList.filter((item) => item.isDone === condition).map((todo) => {
                    return (
                        <H.SectionLi key={todo.id}>
                            <H.LiTop>
                                <H.LiTitle>
                                    <H.LiTitleP>{todo.title}</H.LiTitleP>      {/* 제목 */}
                                    <H.LiButton buttonWidth={'20%'} buttonColor={'dodgerBlue'}>
                                        <StyledLink to={`/detail/${todo.id}`}>상세</StyledLink>
                                    </H.LiButton>
                                </H.LiTitle>
                                <H.LiContent>
                                    <H.LiContentP>{todo.content}</H.LiContentP>  {/* 내용 */}
                                </H.LiContent>
                            </H.LiTop>
                            <H.LiBottom>
                                <H.LiButton buttonWidth={'100%'} buttonColor={'red'} onClick={() => dispatch(deleteTodo(todo))}>삭제하기</H.LiButton>
                                <H.LiButton buttonWidth={'100%'} buttonColor={'green'} onClick={() => dispatch(modifyTodo(todo))}>{btnName}</H.LiButton>
                            </H.LiBottom>
                        </H.SectionLi>
                    )
                })}
            </H.SectionUl>
        </H.MainArticleSection>
    )
};

export default Section;