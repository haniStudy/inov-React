import Section from "./Section";
import * as H from "../styles/HomeStyle";

const Article = ({todoList, dispatch})  => {
    return (
        <H.MainArticle>
            <Section todoList={todoList} condition={false} dispatch={dispatch}/>
            <Section todoList={todoList} condition={true}  dispatch={dispatch}/>
        </H.MainArticle>
    )
};

export default Article;