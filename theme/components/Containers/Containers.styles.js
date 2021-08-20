import styled from '@emotion/styled';
import React from 'react';
import { motion } from 'framer-motion';
import { mq } from '../../styles/breakpoints';
export const AppContainer = styled('div')(({ templateKey }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    position: templateKey === 'cardPage' ? 'relative' : 'fixed',
    minHeight: templateKey === 'cardPage' ? '100vh' : '',
}));
export const MainContainer = React.memo(styled.div({
    flex: 1,
    width: '100%',
    display: 'flex',
    maxHeight: '100%',
}));
export const ContentContainer = styled('div')(({ templateKey, isTiny }) => ({
    flex: 1,
    background: 'white',
    display: 'flex',
    minHeight: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    flexDirection: isTiny ? 'column' : undefined,
    overflowY: isTiny ? 'auto' : 'hidden',
    ...(templateKey === 'pageText'
        ? {
            [mq[1]]: {
                paddingLeft: '200px',
                paddingRight: '50px',
            },
            [mq[2]]: {
                paddingRight: '100px',
            },
            [mq[3]]: {
                paddingRight: '200px',
            },
        }
        : {}),
}));
export const MarkDownContainer = styled(motion.div)(({ flex }) => ({
    flex: flex === undefined ? 1 : flex,
    padding: '0 32px',
    fontSize: 16,
    marginBottom: '2rem',
    '& > p': {
        margin: 0,
    },
    '& > table': {
        textAlign: 'left',
    },
}));
export const ImageContainer = styled('div')(({ imgSrc, bgColor }) => ({
    flex: 2,
    height: '100%',
    width: '100%',
    backgroundImage: `url(${imgSrc})`,
    backgroundColor: bgColor || 'transparent',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}));
export const SplashContentContainer = styled.div({
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
});
