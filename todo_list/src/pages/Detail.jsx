import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from "../styles/DetailStyle";
import StyledLink from "../styles/LinkStyle";

function Detail() {
  const param = useParams();
  const todo = useSelector((state) => (state.todoList)).find((work) => work.id === param.id);

  return (
    <S.DetailPage key={todo.id}>
      <S.DetailArticle>
        <S.ArticleHeader>
          <p>ID : {todo.id}</p>
          <StyledLink to={`/`}>
            <S.ArticleButton>
              이전으로
            </S.ArticleButton>
          </StyledLink>
        </S.ArticleHeader>
        <S.ArticleBody>
          <S.DetailTitle>{todo.title}</S.DetailTitle>
          <S.DetailContent>{todo.content}</S.DetailContent>
        </S.ArticleBody>
      </S.DetailArticle>
    </S.DetailPage>
  )
}
export default Detail
