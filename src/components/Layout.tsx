import React from 'react';
import { Global, css } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';
import { useColor } from 'color-thief-react';
import { SectionFragment } from '../templates/queryInfo.gql';
import SectionItem from './SectionItem';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SideNav from './SideNav';
import Carousel from './Carousel';
import SplashView from './SplashView';
import Navigation from './Navigation';
import {
  AppContainer,
  MainContainer,
  ContentContainer,
} from './Containers/Containers.styles';
import { Maybe } from '../generated/graphql';

export interface SectionItemProps {
  title: Maybe<string> | undefined;
  superText: Maybe<string> | undefined;
  imageSrc: Maybe<string> | undefined;
  videoSrc: Maybe<string> | undefined;
  body: SectionFragment['body'];
  actionButton: SectionFragment['actionButton'];
}
const Layout = React.memo(function Layout({
  navData,
  sectionData,
  templateKey,
}: {
  navData: { label: string; path: string }[];
  sectionData: SectionFragment[];
  templateKey: string;
}) {
  const [selectedSection, setSelectedSection] = React.useState(0);

  const mediaUrl = React.useMemo(
    () => sectionData[selectedSection]?.slideMedia?.publicURL,
    [sectionData, selectedSection]
  );

  const { data: colorData, loading } = useColor(mediaUrl || '#', 'hex');

  const [contrastColors, setContrastColors] = React.useState([
    'white',
    'black',
  ]);

  React.useEffect(() => {
    if (!mediaUrl) setContrastColors(['white', 'black']);
    else if (colorData && !loading)
      setContrastColors(pickTextColor(colorData, 'white', 'black'));
  }, [colorData, loading, mediaUrl]);

  const navItems = React.useMemo(
    () =>
      sectionData.map(({ title }, i) => ({
        onClick() {
          setSelectedSection(i);
          carouselRef.current.changeSlide(i - selectedSection);
        },
        text: title,
      })),
    [sectionData, selectedSection]
  );
  const sectionItems = React.useMemo(
    () =>
      sectionData.map(
        ({
          title,
          body,
          slideMedia,
          titleSuperText,
          slideVideo,
          actionButton,
        }) => ({
          title,
          superText: titleSuperText,
          imageSrc: slideMedia?.publicURL,
          videoSrc: slideVideo,
          body,
          actionButton: actionButton,
        })
      ),
    [sectionData]
  );

  const carouselRef = React.useRef<any>();
  const isTiny = useMediaQuery('only screen and (max-width: 768px)');

  return (
    <>
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
        `}
      />
      <AppContainer templateKey={templateKey}>
        <Navigation navData={navData} contrastColors={contrastColors} />
        <MainContainer>
          {templateKey === 'home' ? (
            <SplashView
              videoSrc="https://vftassets.s3.amazonaws.com/VFT_Animation.mp4"
              overlayColor="rgba(0,0,0,0.65)"
            />
          ) : templateKey === 'cardPage' ? (
            <ContactForm />
          ) : (
            <>
              {sectionItems.length > 1 ? (
                <SideNav
                  selectedIdx={selectedSection}
                  navItems={navItems}
                  contrastColors={contrastColors}
                />
              ) : null}

              <ContentContainer templateKey={templateKey} isTiny={isTiny}>
                {sectionItems.length && !isTiny ? (
                  <Carousel ref={carouselRef} curPage={selectedSection}>
                    {sectionItems.map((section) => (
                      <SectionItem section={section} key={section.title} />
                    ))}
                  </Carousel>
                ) : sectionItems.length ? (
                  sectionItems.map((section) => (
                    <SectionItem section={section} key={section.title} />
                  ))
                ) : (
                  <div />
                )}
              </ContentContainer>
            </>
          )}
        </MainContainer>
        <Footer />
      </AppContainer>
    </>
  );
});
export default Layout;

function pickTextColor(bgColor: string, lightColor: string, darkColor: string) {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const light = r * 0.299 + g * 0.587 + b * 0.114 > 100;
  return light ? [darkColor, lightColor] : [lightColor, darkColor];
}
