import styled from '@emotion/styled';
const TextTitle = styled.div(({ flex }) => ({
    flex: flex === undefined ? 1 : flex,
    marginBottom: "2rem",
    color: "black",
    padding: "0 32px",
    "& > h1": {
        margin: 0,
    },
    "& > h2": {
        fontWeight: "normal",
        margin: 0,
        fontSize: "1.2rem",
        letterSpacing: "1px",
    },
}));
export default TextTitle;
