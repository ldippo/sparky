import React from "react";
import StyledGatLink from './Link.styles';

const Link = React.memo<any>(function Link({
  to,
  children,
  contrastColors,
}) {
  return (
    <StyledGatLink to={"/" + to} contrastColors={contrastColors}>
      {children}
    </StyledGatLink>
  );
});

export default Link;