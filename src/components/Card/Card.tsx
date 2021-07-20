import React from 'react';

import { CardWrapper, CardContainer } from './Card.styles';

const Card = ({children}) => {
	return (
		<CardWrapper>
			<CardContainer>
        {children}
      </CardContainer>
		</CardWrapper>
	);
};

export default Card;
