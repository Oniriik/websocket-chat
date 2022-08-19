import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { shadowSm } from 'Styles';

type StyleProps = {
    sent : boolean;
};

export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    padding: 1rem 2rem;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin: 0;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: row;
    width: 100%;

    div,input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;

    }

    button {
        font-weight: bold;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

`;

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;
    ${shadowSm}
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    min-width: 200px;
    max-width: 60%;
    
    padding: 1rem;
    
    ${shadowSm}
    ${({ sent }: StyleProps) => sent ? 
        `
        color: white;
        background-color: #325dfa;
        border-radius: 0.5rem 0.5rem 0 0.5rem;
        align-self: flex-end;
    `
        :
        `
        background-color: #ededed;
        border-radius: 0 0rem 0.5rem 0.5rem;
    `
} 
`;

export const Author = styled.span`
    text-transform: capitalize;
    opacity: 0.65;
`;

export const MessageBody = styled.span`
    font-size: 20px;
    overflow-wrap: break-word;

`;
export const MessageTimestamp = styled.span`
    align-self: flex-end;
    font-size: 10px;
    opacity: 0.65;
`;