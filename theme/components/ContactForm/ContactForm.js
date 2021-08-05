import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Card from '../Card';
import { FormContainer, FormItem, FormLabel, FormInput, FormTextArea, } from '../Form/Form.styles';
import { TwoColumnContainer, DetailsContainer, DetailsLabel, DetailsContent, } from '../CardTwoColumn/CardTwoColumn.styles';
import ContactFormTextTitle from './ContactForm.styles';
import { CTAButton } from '../CTAButton/CTAButton.styles';
// import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    const isTiny = useMediaQuery('only screen and (max-width: 768px)');
    const isBig = useMediaQuery('only screen and (min-width: 992px)');
    return (React.createElement(Card, null,
        React.createElement(ContactFormTextTitle, { isTiny: isTiny, isBig: isBig },
            React.createElement("h1", null, "Contact Us")),
        React.createElement(TwoColumnContainer, null,
            React.createElement(DetailsContainer, null,
                React.createElement("div", null,
                    React.createElement(DetailsLabel, null, "\u260E Give us a call"),
                    React.createElement(DetailsContent, null, "1-844-483-8765")),
                React.createElement("div", null,
                    React.createElement(DetailsLabel, null, "\uD83D\uDCE7 Send us an email"),
                    React.createElement(DetailsContent, null, "info@vft.technology"))),
            React.createElement(FormContainer, { method: "post", "netlify-honeypot": "bot-field", "data-netlify-recaptcha": "true", "data-netlify": "true", name: "contact" },
                React.createElement("input", { type: "hidden", name: "bot-field" }),
                React.createElement("input", { type: "hidden", name: "form-name", value: "contact" }),
                React.createElement(FormItem, null,
                    React.createElement(FormLabel, { htmlFor: "name" }, "Full name *"),
                    React.createElement(FormInput, { type: "text", id: "name", name: "name", placeholder: "eg. John Doe", required: true, "aria-required": true })),
                React.createElement(FormItem, null,
                    React.createElement(FormLabel, { htmlFor: "email" }, "Your email *"),
                    React.createElement(FormInput, { type: "email", id: "email", name: "email", placeholder: "eg. example@email.com", required: true, "aria-required": true })),
                React.createElement(FormItem, null,
                    React.createElement(FormLabel, { htmlFor: "phone" }, "Phone number"),
                    React.createElement(FormInput, { type: "tel", id: "phone", name: "phone", placeholder: "eg. 123-456-7890" })),
                React.createElement(FormItem, null,
                    React.createElement(FormLabel, { htmlFor: "message" }, "Message *"),
                    React.createElement(FormTextArea, { rows: 5, name: "message", id: "message", required: true, "aria-required": true, placeholder: "Hello! Write us a message here." })),
                React.createElement(CTAButton, { type: "submit" }, "Submit Form")))));
};
export default React.memo(ContactForm);
