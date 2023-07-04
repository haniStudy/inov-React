import { styled } from "styled-components";

export const DetailPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailArticle = styled.article`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid darkcyan;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  gap: 5%;
`

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`

export const ArticleButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: white;
  border: 2px solid dodgerblue;
  border-radius: 10px;
  padding: 0;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover{
    background-color: lightgray;
  }
`

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  box-sizing: border-box;
  gap: 10px;
`

export const DetailTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const DetailContent = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`