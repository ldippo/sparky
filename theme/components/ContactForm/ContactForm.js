import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Card from '../Card';
import { FormContainer, FormItem, FormLabel, FormInput, FormTextArea, } from '../Form/Form.styles';
import { TwoColumnContainer, DetailsContainer, DetailsLabel, DetailsContent, } from '../CardTwoColumn/CardTwoColumn.styles';
import ContactFormTextTitle from './ContactForm.styles';
import { CTAButton } from '../CTAButton/CTAButton.styles';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { init, send } from 'emailjs-com';
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
                } }, ({ submitForm, isValid }) => (React.createElement(FormContainer, null,
                React.createElement(Form, null,
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "name" }, "Full name *"),
                        React.createElement(Field, { name: "from_name", type: "text", placeholder: "eg. John Doe", component: FormInput })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "email" }, "Your email *"),
                        React.createElement(Field, { type: "email", name: "email", placeholder: "eg. example@email.com", component: FormInput })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "phone" }, "Phone number"),
                        React.createElement(Field, { type: "tel", name: "phone", placeholder: "eg. 123-456-7890", component: FormInput })),
                    React.createElement(FormItem, null,
                        React.createElement(FormLabel, { htmlFor: "message" }, "Message *"),
                        React.createElement(Field, { rows: 5, name: "message", placeholder: "Hello! Write us a message here.", component: FormTextArea })),
                    React.createElement(CTAButton, { type: "submit", onClick: submitForm, disabled: !isValid }, "Submit Form"))))))));
};
export default React.memo(ContactForm);
