import React from 'react';
import { CardWrapper, CardContainer } from './Card.styles';
// eslint-disable-next-line @typescript-eslint/ban-types
const Card = ({ children }) => {
    return (React.createElement(CardWrapper, null,
        React.createElement(CardContainer, null, children)));
};
export default Card;
