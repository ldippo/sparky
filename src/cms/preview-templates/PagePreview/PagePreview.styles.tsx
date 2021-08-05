import styled from '@emotion/styled';
import React from 'react';
import { Global, css } from '@emotion/react';
export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper,
      #preview-pane,
      .frame-content {
        width: 100%;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
      }

      html {
        font-size: 12px;
      }

      h1 {
        font-size: 1.8rem;
      }

      @media screen and (min-width: 768px) {
        html {
          font-size: 14px;
        }
      }

      iframe#preview-pane {
        position: relative;
      }

      .frame-content .SubGrid .SubGridInfo {
        display: block;
      }

      @media (min-width: 768px) {
        .frame-content .SubGrid .SubGridInfo {
          display: flex;
          padding-left: 50px;
        }
      }
    `}
  />
);
export const PreviewContainer = styled.div`
  height: 100vh;
  & .SubGrid {
    height: auto;
  }
  & .ImageContainer {
    flex: 4;
  }
`; //This removes SubGrid height: 100% for the CMS Preview view and increases vertical space the image takes up.
