import { styled } from 'styled-components';

export const Main = styled.main`
    min-width: 800px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const Header = styled.header`
    width: 100%;
`

export const HeaderTitle = styled.section`
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0.7em;
`

export const HeaderSection = styled.section`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gray;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px 20px 5px 20px;
`

export const HeaderSectionDiv = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    align-items: center;
    gap: 1vw;
`

export const HeaderSectionInput = styled.input`
    height: 85%;
    width: 35%;
    border-radius: 10px;
    border: transparent;
    padding-top: 0;
    padding-bottom: 0;
`

export const HeaderSectionButton = styled.button`
    width: 15%;
    height: 85%;
    border: transparent;
    border-radius: 10px;
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
`

export const MainArticle = styled.article`
    width: 100%;
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 1em;
    margin: auto 0;
    padding: 20px;
`

export const MainArticleSection = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    border: 0;
    vertical-align: top;
`
  
export const SectionP = styled.p`
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 0.5em;
`
  
export const SectionUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 23px 13px;
`
  
export const SectionLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 279.5px;
    height: 200px;
    border: 2px solid darkcyan;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    gap: 10px;
`

export const LiTop = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`
  
export const LiTitle = styled.div`
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
`
  
export const LiTitleP = styled.p`
    width: 75%;
    font-size: 1.4rem;
    font-weight: 900;
    text-align: flex-start;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
  
export const LiButton = styled.button`
    width: ${(props) => (props.buttonwidth)};
    height: 100%;
    background-color: transparent;
    border: 2px solid ${(props) => (props.buttoncolor)};
    border-radius: 10px;
    padding: 0;
    font-size: 0.9rem;
    cursor: pointer;
`

export const LiContent = styled.div`
    height: 70%;
`
  
export const LiContentP = styled.p`
    font-size: 1.1rem;
    text-align: flex-start;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`
  
export const LiBottom = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    gap: 10px;
`