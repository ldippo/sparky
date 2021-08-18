import styled from '@emotion/styled';
import { mq } from '../../styles/breakpoints';
import { Form } from 'formik';
export const FormContainer = styled(Form)({
    margin: '0 2rem',
    textAlign: 'center',
    [mq[1]]: {
        margin: '0 5rem',
    },
    [mq[2]]: {
        width: '60%',
    },
});
export const FormItem = styled.div({
    textAlign: 'left',
    marginBottom: '1rem',
});
export const FormLabel = styled.label({
    padding: '.5rem 1rem .6rem',
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#666',
});
const inputStyles = {
    display: 'block',
    padding: '.6rem 1rem',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    borderTop: '1px solid lightgray',
    fontSize: '1rem',
    fontFamily: 'inherit',
    borderRadius: 25,
    '&:focus': {
        outline: 'transparent solid 2px',
        boxShadow: '0 0 2px 1px #5071ad',
    },
};
export const FormInput = styled.input(inputStyles);
export const FormTextArea = styled.textarea({
    resize: 'none',
    ...inputStyles,
});
