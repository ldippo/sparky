"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const media_query_1 = require("@react-hook/media-query");
const Card_1 = __importDefault(require("../Card"));
const Form_styles_1 = require("../Form/Form.styles");
const CardTwoColumn_styles_1 = require("../CardTwoColumn/CardTwoColumn.styles");
const ContactForm_styles_1 = __importDefault(require("./ContactForm.styles"));
const CTAButton_styles_1 = require("../CTAButton/CTAButton.styles");
// import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    const isTiny = media_query_1.useMediaQuery('only screen and (max-width: 768px)');
    const isBig = media_query_1.useMediaQuery('only screen and (min-width: 992px)');
    return (react_1.default.createElement(Card_1.default, null,
        react_1.default.createElement(ContactForm_styles_1.default, { isTiny: isTiny, isBig: isBig },
            react_1.default.createElement("h1", null, "Contact Us")),
        react_1.default.createElement(CardTwoColumn_styles_1.TwoColumnContainer, null,
            react_1.default.createElement(CardTwoColumn_styles_1.DetailsContainer, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(CardTwoColumn_styles_1.DetailsLabel, null, "\u260E Give us a call"),
                    react_1.default.createElement(CardTwoColumn_styles_1.DetailsContent, null, "1-844-483-8765")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(CardTwoColumn_styles_1.DetailsLabel, null, "\uD83D\uDCE7 Send us an email"),
                    react_1.default.createElement(CardTwoColumn_styles_1.DetailsContent, null, "info@vft.technology"))),
            react_1.default.createElement(Form_styles_1.FormContainer, { method: "post", "netlify-honeypot": "bot-field", "data-netlify-recaptcha": "true", "data-netlify": "true", name: "contact" },
                react_1.default.createElement("input", { type: "hidden", name: "bot-field" }),
                react_1.default.createElement("input", { type: "hidden", name: "form-name", value: "contact" }),
                react_1.default.createElement(Form_styles_1.FormItem, null,
                    react_1.default.createElement(Form_styles_1.FormLabel, { htmlFor: "name" }, "Full name *"),
                    react_1.default.createElement(Form_styles_1.FormInput, { type: "text", id: "name", name: "name", placeholder: "eg. John Doe", required: true, "aria-required": true })),
                react_1.default.createElement(Form_styles_1.FormItem, null,
                    react_1.default.createElement(Form_styles_1.FormLabel, { htmlFor: "email" }, "Your email *"),
                    react_1.default.createElement(Form_styles_1.FormInput, { type: "email", id: "email", name: "email", placeholder: "eg. example@email.com", required: true, "aria-required": true })),
                react_1.default.createElement(Form_styles_1.FormItem, null,
                    react_1.default.createElement(Form_styles_1.FormLabel, { htmlFor: "phone" }, "Phone number"),
                    react_1.default.createElement(Form_styles_1.FormInput, { type: "tel", id: "phone", name: "phone", placeholder: "eg. 123-456-7890" })),
                react_1.default.createElement(Form_styles_1.FormItem, null,
                    react_1.default.createElement(Form_styles_1.FormLabel, { htmlFor: "message" }, "Message *"),
                    react_1.default.createElement(Form_styles_1.FormTextArea, { rows: 5, name: "message", id: "message", required: true, "aria-required": true, placeholder: "Hello! Write us a message here." })),
                react_1.default.createElement(CTAButton_styles_1.CTAButton, { type: "submit" }, "Submit Form")))));
};
exports.default = react_1.default.memo(ContactForm);
