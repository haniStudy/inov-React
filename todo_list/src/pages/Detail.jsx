import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as S from "../styles/DetailStyled"

function Detail() {
  const todoList = useSelector((state) => {
    return state.todoList.todo;
  })
  const param = useParams();
  const todo = todoList.find((item) => item.uuid === param.id);

  return (
    <S.DetailPage>
      <S.DetailArticle>
        <S.ArticleHeader>
          <p>ID : {todo.uuid}</p>
          <S.ArticleButton><S.StyledLink to={`/`}>뒤로가기</S.StyledLink></S.ArticleButton>
        </S.ArticleHeader>
        <S.ArticleBody>
          <S.DetailTitle>{todo.title}</S.DetailTitle>
          <S.DetailContent>{todo.content}</S.DetailContent>
        </S.ArticleBody>
        <S.ArticleFooter>
          <S.ArticleButton>이전</S.ArticleButton>
          <S.ArticleButton>수정</S.ArticleButton>
          <S.ArticleButton>다음</S.ArticleButton>
        </S.ArticleFooter>
      </S.DetailArticle>
    </S.DetailPage>
  )
}

export default Detail