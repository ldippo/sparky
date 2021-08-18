/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Global, css } from '@emotion/react';
import { useMediaQuery } from '@react-hook/media-query';
import SectionItem from './SectionItem';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SideNav from './SideNav';
import Carousel from './Carousel';
import SplashView from './SplashView';
import Navigation from './Navigation';
import { AppContainer, MainContainer, ContentContainer, } from './Containers/Containers.styles';
import { Helmet } from 'react-helmet';
const Layout = React.memo(function Layout({ navData, sectionData, templateKey, }) {
    const [selectedSection, setSelectedSection] = React.useState(0);
    const contrastColors = ['white', 'black'];
    const navItems = React.useMemo(() => sectionData.map(({ title }, i) => ({
        onClick() {
            setSelectedSection(i);
            carouselRef.current.changeSlide(i - selectedSection);
        },
        text: title,
    })), [sectionData, selectedSection]);
    const sectionItems = React.useMemo(() => sectionData.map(({ title, body, slideMedia, titleSuperText, slideVideo, actionButton, }) => ({
        title,
        superText: titleSuperText,
        imageSrc: slideMedia?.publicURL,
        videoSrc: slideVideo,
        body,
        actionButton: actionButton,
    })), [sectionData]);
    const carouselRef = React.useRef();
    const isTiny = useMediaQuery('only screen and (max-width: 768px)');
    // function initAnalytics(dataLayer: any[]) {
    //   function gtag(...args: any) {
    //     dataLayer.push(...args);
    //   }
    //   gtag('js', new Date());
    //   gtag('config', 'G-ESEEVB8WVJ');
    // }
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-ESEEVB8WVJ" }),
            React.createElement("script", null, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ESEEVB8WVJ');
  `)),
        React.createElement(Global, { styles: css `
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
        ` }),
        React.createElement(AppContainer, { templateKey: templateKey },
            React.createElement(Navigation, { navData: navData, contrastColors: contrastColors }),
            React.createElement(MainContainer, null, templateKey === 'home' ? (React.createElement(SplashView, { videoSrc: "https://vftassets.s3.amazonaws.com/VFT_Animation.mp4", overlayColor: "rgba(0,0,0,0.65)" })) : templateKey === 'cardPage' ? (React.createElement(ContactForm, null)) : (React.createElement(React.Fragment, null,
                sectionItems.length > 1 ? (React.createElement(SideNav, { selectedIdx: selectedSection, navItems: navItems, contrastColors: contrastColors })) : null,
                React.createElement(ContentContainer, { templateKey: templateKey, isTiny: isTiny }, sectionItems.length && !isTiny ? (React.createElement(Carousel, { ref: carouselRef, curPage: selectedSection }, sectionItems.map((section) => (React.createElement(SectionItem, { section: section, key: section.title }))))) : sectionItems.length ? (sectionItems.map((section) => (React.createElement(SectionItem, { section: section, key: section.title })))) : (React.createElement("div", null)))))),
            React.createElement(Footer, null))));
});
export default Layout;
// function pickTextColor(bgColor: string, lightColor: string, darkColor: string) {
//   const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
//   const r = parseInt(color.substring(0, 2), 16); // hexToR
//   const g = parseInt(color.substring(2, 4), 16); // hexToG
//   const b = parseInt(color.substring(4, 6), 16); // hexToB
//   const light = r * 0.299 + g * 0.587 + b * 0.114 > 100;
//   return light ? [darkColor, lightColor] : [lightColor, darkColor];
// }
