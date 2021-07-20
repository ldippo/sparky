import styled from '@emotion/styled';

export const PreviewContainer = styled.div`
height: 100vh;
& .SubGrid {
  height: auto;
};
& .ImageContainer {
  flex: 4
}
`; //This removes SubGrid height: 100% for the CMS Preview view and increases vertical space the image takes up.