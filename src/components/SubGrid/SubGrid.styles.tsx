import styled from "@emotion/styled";
import { mq } from '../../styles/breakpoints';

export const SubGrid = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BigSubGridInfo = styled.div`
  padding-top: 48px;
  display: flex;
  flex: 1;
  ${mq[0]} {
    margin: 0 2rem;
  }
  ${mq[2]} {
    margin: 0 5rem;
  }
  ${mq[3]} {
    margin: 0 18rem;
  }
`;

export const TinySubGridInfo = styled.div`
  flex: 1;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 5px;
  ${mq[0]} {
    padding-bottom: 20px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    display: flex;
  }
`;