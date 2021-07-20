import styled from '@emotion/styled';
import { Link } from 'gatsby';
import isPropValid from "@emotion/is-prop-valid";

const StyledGatLink = styled(Link, {
  shouldForwardProp: prop => 
    isPropValid(prop) && prop !== "contrastColors"
})<{ to: string; contrastColors: string[] }>`
color: ${(props) => props.contrastColors[1] || "white"};
text-decoration: none;
text-shadow: 1px 1px 0px ${(props) => props.contrastColors[0] || "black"};
font-family: Open Sans;
`;

export default StyledGatLink;
