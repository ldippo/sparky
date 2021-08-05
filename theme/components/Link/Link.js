import React from 'react';
import StyledGatLink from './Link.styles';
const Link = React.memo(function Link({ to, children, contrastColors }) {
    return (React.createElement(StyledGatLink, { to: '/' + to, contrastColors: contrastColors }, children));
});
export default Link;
