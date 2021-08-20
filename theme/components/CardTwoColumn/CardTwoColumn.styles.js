import styled from '@emotion/styled';
import { mq } from '../../styles/breakpoints';
export const TwoColumnContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    [mq[2]]: {
        flexDirection: 'row',
    },
});
export const DetailsContainer = styled('div')({
    margin: '2rem 2rem',
    borderTop: '1px solid darkgray',
    padding: '2rem 0',
    [mq[1]]: {
        margin: '2rem 5rem',
    },
    [mq[2]]: {
        width: '40%',
        textAlign: 'right',
        padding: '0 5rem 0 0',
        borderRight: '1px solid darkgray',
        display: 'unset',
        margin: 0,
        borderTop: 'none',
    },
});
export const DetailsLabel = styled.p({
    margin: 0,
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#666',
});
export const DetailsContent = styled.p({
    color: '#666',
    marginBottom: '2.3rem',
});
