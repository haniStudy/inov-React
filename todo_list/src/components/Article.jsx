import Section from "./Section";
import * as H from "../styles/HomeStyle";

const Article = ()  => {
    return (
        <H.MainArticle>
            <Section condition={false} />
            <Section condition={true} />
        </H.MainArticle>
    )
};

export default Article;