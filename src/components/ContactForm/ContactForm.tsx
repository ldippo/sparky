/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import ReCAPTCHA from 'react-google-recaptcha';
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
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import { init, send } from 'emailjs-com';

declare var grecaptcha: any;

const FormInputFormik = React.memo(function FormInputFormik({
  name,
  multi,
  ...props
}: any) {
  const [field] = useField(name);
  return !multi ? (
    <FormInput {...field} {...props} />
  ) : (
    <FormTextArea {...field} {...props} />
  );
});
// import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  const isTiny = useMediaQuery('only screen and (max-width: 768px)');
  const isBig = useMediaQuery('only screen and (min-width: 992px)');
  const schema = React.useMemo(
    () =>
      yup.object().shape({
        from_name: yup.string().required(),
        message: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string(),
      }),
    []
  );
  const [recaptchaKey, setRecaptcha] = React.useState<string | null>(null);
  const [messageSent, setMessageSent] = React.useState(false);
  React.useEffect(() => {
    init(process.env.GATSBY_EMAILKEY || '');
  }, []);
  const onSubmit = React.useCallback(
    (templateParams) => {
      console.log('is this working', templateParams);
      send(
        process.env.GATSBY_EMAIL_SVC_ID || 'default_service',
        'template_la2u6re',
        {
          ...templateParams,
          'g-recaptcha-response': recaptchaKey,
        }
      ).then((x) => setMessageSent(true));
    },
    [recaptchaKey]
  );
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
        {!messageSent ? (
          <Formik
            validationSchema={schema}
            initialValues={{}}
            onSubmit={onSubmit}
          >
            {({ submitForm, isValid }) => (
              <>
                <FormContainer>
                  <FormItem>
                    <FormLabel htmlFor="name">Full name *</FormLabel>
                    <FormInputFormik
                      name="from_name"
                      type="text"
                      placeholder="eg. John Doe"
                    />
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="email">Your email *</FormLabel>
                    <FormInputFormik
                      type="email"
                      name="email"
                      placeholder="eg. example@email.com"
                    />
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="phone">Phone number</FormLabel>
                    <FormInputFormik
                      type="tel"
                      name="phone"
                      placeholder="eg. 123-456-7890"
                    />
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="message">Message *</FormLabel>
                    <FormInputFormik
                      rows={5}
                      name="message"
                      placeholder="Hello! Write us a message here."
                      multi
                    />
                  </FormItem>
                  <ReCAPTCHA
                    sitekey="6LfFgw0cAAAAABY2QhFXZO_6cFGgzXF-4ACBNik3"
                    onChange={setRecaptcha}
                  />
                  <CTAButton
                    type="submit"
                    onClick={submitForm}
                    disabled={!isValid || !recaptchaKey}
                  >
                    Submit Form
                  </CTAButton>
                </FormContainer>
              </>
            )}
          </Formik>
        ) : (
          <FormContainer>
            <p>Your message was sent successfully.</p>
          </FormContainer>
        )}
      </TwoColumnContainer>
    </Card>
  );
};

export default React.memo(ContactForm);
