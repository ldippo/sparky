import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import React, { useRef, useEffect } from "react";

const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  let newCache = createCache({ key: "mykey", container });
  return newCache;
});

export default (Component) => (props) => {
  const iframeHeadElem = useRef(null);
  useEffect(() => {
    const iframe = document.querySelector("#preview-pane");
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
