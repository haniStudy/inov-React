import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    width: ${({$linkwidth}) => $linkwidth};
    height: 100%;
    text-decoration: none;
    &:hover, &:focus, &:active {
        color: black;
    }
`

export default StyledLink;