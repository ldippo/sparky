import styled from '@emotion/styled';
import React from 'react';
import { mq } from '../../styles/breakpoints';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoContainer: React.FC<{ splash?: boolean; style?: any }> = styled.div(
  (props) => ({
    width: (props.splash && '200px') || undefined,
    flex: props.splash ? 0 : 1,
    [mq[1]]: {
      maxWidth: '25%',
    },
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 100,
    paddingLeft: props.splash ? 0 : 24,
    marginBottom: (props.splash && '2rem') || undefined,
  })
);

export default LogoContainer;
