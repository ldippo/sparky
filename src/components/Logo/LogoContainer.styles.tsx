import styled from '@emotion/styled';
import { mq } from '../../styles/breakpoints';

const LogoContainer: React.FC<{splash?: boolean, style?: any}> = styled.div(props => ({
    width: props.splash && '200px',
    flex: props.splash ? 0 : 1,
    [mq[1]]: {
      maxWidth: "25%",
    },
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 100,
    paddingLeft: props.splash ? 0 : 24,
    marginBottom: props.splash && "2rem",
  }));  

  export default LogoContainer;