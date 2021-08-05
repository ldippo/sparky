import React from 'react';

import { CardWrapper, CardContainer } from './Card.styles';

// eslint-disable-next-line @typescript-eslint/ban-types
const Card: React.FC<{}> = ({ children }) => {
  return (
    <CardWrapper>
      <CardContainer>{children}</CardContainer>
    </CardWrapper>
  );
};

export default Card;
