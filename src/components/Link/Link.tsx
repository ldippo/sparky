import React from 'react';
import StyledGatLink from './Link.styles';

const Link: React.FC<{
  to: string;
  contrastColors: string[];
}> = React.memo(function Link({ to, children, contrastColors }) {
  return (
    <StyledGatLink to={'/' + to} contrastColors={contrastColors}>
      {children}
    </StyledGatLink>
  );
});

export default Link;
