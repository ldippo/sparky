/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Card from '../Card';
import { FormContainer, FormItem, FormLabel, FormInput, FormTextArea, } from '../Form/Form.styles';
import { TwoColumnContainer, DetailsContainer, DetailsLabel, DetailsContent, } from '../CardTwoColumn/CardTwoColumn.styles';
import ContactFormTextTitle from './ContactForm.styles';
import { CTAButton } from '../CTAButton/CTAButton.styles';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import { init, send } from 'emailjs-com';
const FormInputFormik = React.memo(function FormInputFormik({ name, multi, ...props }) {
    const [field] = useField(name);
    return !multi ? (React.createElement(FormInput, Object.assign({}, field, props))) : (React.createElement(FormTextArea, Object.assign({}, field, props)));
});
// import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    const isTiny = useMediaQuery('only screen and (max-width: 768px)');
    const isBig = useMediaQuery('only screen and (min-width: 992px)');
    const schema = yup.object().shape({
        from_name: yup.string().required(),
        message: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string(),
    });
    React.useEffect(() => {
        init(process.env.GATSBY_EMAILKEY || '');
    }, []);
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
            React.createElement(Formik, { validationSchema: schema, initialValues: {}, onSubmit: (templateParams) => {
                    console.log('is this working', templateParams);
                    send('default_service', 'template_la2u6re', templateParams).then((x) => console.log({ result: x }));
                } }, ({ submitForm, isValid, values }) => (React.createElement(React.Fragment, null,
                React.createElement("pre", null, JSON.stringify(values, null, 4)),
                React.createElement(FormContainer, null,
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "name" }, "Full name *"),
                        React.createElement(FormInputFormik, { name: "from_name", type: "text", placeholder: "eg. John Doe" })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "email" }, "Your email *"),
                        React.createElement(FormInputFormik, { type: "email", name: "email", placeholder: "eg. example@email.com" })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "phone" }, "Phone number"),
                        React.createElement(FormInputFormik, { type: "tel", name: "phone", placeholder: "eg. 123-456-7890" })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "message" }, "Message *"),
                        React.createElement(FormInputFormik, { rows: 5, name: "message", placeholder: "Hello! Write us a message here.", multi: true })),
                    React.createElement(CTAButton, { type: "submit", onClick: submitForm, disabled: !isValid }, "Submit Form"))))))));
};
export default React.memo(ContactForm);
