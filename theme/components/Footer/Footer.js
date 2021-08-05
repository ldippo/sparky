import React from 'react';
import FooterStyles from './Footer.styles';
const Footer = () => {
    return React.createElement(FooterStyles, null,
        "COPYRIGHT \u00A9 ",
        new Date().getFullYear(),
        " VFT SOLUTIONS");
};
export default Footer;
