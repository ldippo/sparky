/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import weakMemoize from '@emotion/weak-memoize';
import React, { useRef, useEffect } from 'react';
const memoizedCreateCacheWithContainer = weakMemoize((container) => {
    // @ts-ignore
    const newCache = createCache({ key: 'mykey', container });
    return newCache;
});
// eslint-disable-next-line react/display-name
function withEmotion(Component) {
    return function component(props) {
        const iframeHeadElem = useRef(null);
        useEffect(() => {
            const iframe = document.querySelector('#preview-pane');
            // @ts-ignore
            iframeHeadElem.current = iframe && iframe.contentDocument.head;
        });
        if (!iframeHeadElem.current)
            return null;
        return (React.createElement(CacheProvider, { value: memoizedCreateCacheWithContainer(iframeHeadElem.current) },
            React.createElement(Component, Object.assign({}, props))));
    };
}
export default withEmotion;
