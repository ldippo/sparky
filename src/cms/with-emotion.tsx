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
function withEmotion(Component: any) {
  return function component(props: any) {
    const iframeHeadElem = useRef<any>(null);
    useEffect(() => {
      const iframe = document.querySelector('#preview-pane');
      // @ts-ignore
      iframeHeadElem.current = iframe && iframe.contentDocument.head;
    });

    if (!iframeHeadElem.current) return null;

    return (
      <CacheProvider
        value={memoizedCreateCacheWithContainer(iframeHeadElem.current)}
      >
        <Component {...props} />
      </CacheProvider>
    );
  };
}

export default withEmotion;
