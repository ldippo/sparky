import styled from '@emotion/styled';
import TextTitle from '../TextTitle/TextTitle.styles';

const ContactFormTextTitle = styled(TextTitle)<{isTiny?:boolean, isBig?:boolean}>`
    margin-top: 32px;
    padding-left: 0;
    margin-left: ${props => props.isTiny ? '2rem' : props.isBig ? '10rem' : '5rem'};
`

export default ContactFormTextTitle;