import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import Card from '../Card';

import {
  FormContainer,
  FormItem,
  FormLabel,
  FormInput,
  FormTextArea,
} from '../Form/Form.styles';

import {
  TwoColumnContainer,
  DetailsContainer,
  DetailsLabel,
  DetailsContent,
} from '../CardTwoColumn/CardTwoColumn.styles';

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
  return (
    <Card>
      <ContactFormTextTitle isTiny={isTiny} isBig={isBig}>
        <h1>Contact Us</h1>
      </ContactFormTextTitle>
      <TwoColumnContainer>
        <DetailsContainer>
          <div>
            <DetailsLabel>☎ Give us a call</DetailsLabel>
            <DetailsContent>1-844-483-8765</DetailsContent>
          </div>
          <div>
            <DetailsLabel>📧 Send us an email</DetailsLabel>
            <DetailsContent>info@vft.technology</DetailsContent>
          </div>
        </DetailsContainer>
        <Formik
          validationSchema={schema}
          initialValues={{}}
          onSubmit={(templateParams) => {
            console.log('is this working', templateParams);
            send('default_service', 'template_la2u6re', templateParams).then(
              (x) => console.log({ result: x })
            );
          }}
        >
          {({ submitForm, isValid }) => (
            <FormContainer>
              <Form>
                <FormItem>
                  <FormLabel htmlFor="name">Full name *</FormLabel>
                  <Field
                    name="from_name"
                    type="text"
                    placeholder="eg. John Doe"
                    component={FormInput}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor="email">Your email *</FormLabel>
                  <Field
                    type="email"
                    name="email"
                    placeholder="eg. example@email.com"
                    component={FormInput}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor="phone">Phone number</FormLabel>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="eg. 123-456-7890"
                    component={FormInput}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor="message">Message *</FormLabel>
                  <Field
                    rows={5}
                    name="message"
                    placeholder="Hello! Write us a message here."
                    component={FormTextArea}
                  />
                </FormItem>
                <CTAButton
                  type="submit"
                  onClick={submitForm}
                  disabled={!isValid}
                >
                  Submit Form
                </CTAButton>
              </Form>
            </FormContainer>
          )}
        </Formik>
      </TwoColumnContainer>
    </Card>
  );
};

export default React.memo(ContactForm);
