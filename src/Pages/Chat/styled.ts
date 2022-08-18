import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

import { shadowSm } from 'Styles';

export const Content = styled.div`
    width: 100%;
    height: 300px;
    margin: auto;
    border-radius: 0.5rem;
    border: 1px solid red;
    background: white;
    ${shadowSm}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 10px;

    & > div {
        margin-right: 15px;
    }
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    margin-top: 10px;

    input {
        margin-top: 20px;
    }

    button {
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 30px;
    }

`;

export const FormLabel = styled.div`
    color: red;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
`;
