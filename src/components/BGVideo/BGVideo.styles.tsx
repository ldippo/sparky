import styled from '@emotion/styled';

export const BackgroundVideoContainer = styled.div({
    flex: 2,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    zIndex: 98,
    width: "100%",
  });
  
  export const BGVideoContent = styled.div(({bgColor}: {bgColor?: string}) => ({
    position: "absolute",
    top: 0,
    backgroundColor: bgColor || "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  }));