import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import * as Styled from './styled';
import { FormContent } from './formcontent';
import { initialValues, validationSchema } from './config';

export const Home= () => {
    const navigate= useNavigate();

    const handleJoin= (values) => {
        navigate('/chat', { state:{ username: values.username } });
    };',';
    return (
        <>
            <Styled.HomeWrapper>
                <Styled.Title>SIMPLE WEBSOCKET CHAT</Styled.Title>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleJoin}
                >
                    {(props) => (
                        <FormContent
                            {...props}
                        />
                    )}
                </Formik>
            </Styled.HomeWrapper>
        </>
    );
};
