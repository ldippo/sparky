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

// import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
	const isTiny = useMediaQuery('only screen and (max-width: 768px)');
	const isBig = useMediaQuery('only screen and (min-width: 992px)');

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

					<FormContainer
						method="post"
						netlify-honeypot="bot-field"
						data-netlify-recaptcha="true"
						data-netlify="true"
						name="contact">
						<input type="hidden" name="bot-field" />
						<input type="hidden" name="form-name" value="contact" />

						<FormItem>
							<FormLabel htmlFor="name">Full name *</FormLabel>
							<FormInput
								type="text"
								id="name"
								name="name"
								placeholder="eg. John Doe"
								required
								aria-required
							/>
						</FormItem>
						<FormItem>
							<FormLabel htmlFor="email">Your email *</FormLabel>
							<FormInput
								type="email"
								id="email"
								name="email"
								placeholder="eg. example@email.com"
								required
								aria-required
							/>
						</FormItem>
						<FormItem>
							<FormLabel htmlFor="phone">Phone number</FormLabel>
							<FormInput type="tel" id="phone" name="phone" placeholder="eg. 123-456-7890" />
						</FormItem>
						<FormItem>
							<FormLabel htmlFor="message">Message *</FormLabel>
							<FormTextArea
								rows={5}
								name="message"
								id="message"
								required
								aria-required
								placeholder="Hello! Write us a message here."></FormTextArea>
						</FormItem>
						<CTAButton type="submit">Submit Form</CTAButton>
					</FormContainer>
				</TwoColumnContainer>
				</Card>
	);
};

export default React.memo(ContactForm);
