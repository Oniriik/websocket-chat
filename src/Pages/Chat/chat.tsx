import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { IMessage } from 'Types';
import { sendMessage ,socket } from 'Socket';
import { timestampToTime } from 'Utils';

import { validationSchema, LocationState } from './config';
import { FormContent } from './formcontent';
import * as Styled from './styled';

export const Chat: React.FC = () => {
    const { username } = useLocation().state as LocationState;
    const [messages, setMessages] = useState([]);
    const onSubmitMessage = async (values: IMessage) => {
        sendMessage(values);
    };
    socket.on('receive-message',(message: IMessage) => {
        setMessages([...messages, message]);
    });

    const isSent = (author) => {
        return username == author;
    };

    const initialValues: IMessage = {
        author: username,
        payload:'',
    };
    return (
        <> 
            <Styled.ChatWrapper>
                <Styled.Title>CHAT</Styled.Title>
                <Styled.MessageWrapper>
                    {
                        messages.map((message:IMessage) => (
                            <Styled.Message key={message.id} sent={isSent(message.author)}>
                                <Styled.Author>{message.author}</Styled.Author>
                                <Styled.MessageBody>{message.payload}</Styled.MessageBody>
                                <Styled.MessageTimestamp>{timestampToTime(message.sendAt)}</Styled.MessageTimestamp>
                            </Styled.Message>
                        ))}
                   
                </Styled.MessageWrapper>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitMessage}
                >
                    {(props) => (
                        <FormContent
                            {...props}
                            
                        />
                    )}
                </Formik>
            </Styled.ChatWrapper>
        </>
    );
};
