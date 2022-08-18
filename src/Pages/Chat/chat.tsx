import { Formik } from 'formik';
import { IMessage } from 'Types';
import { sendMessage } from 'Socket';

import { initialValues, validationSchema } from './config';
import { FormContent } from './formcontent';

export const Chat: React.FC = () => {

    const onSubmitLogin = async (values: IMessage) => {
        sendMessage(values);
    };

    return (
        <>
            <h1>chat</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitLogin}
            >
                {(props) => (
                    <FormContent
                        {...props}
                    />
                )}
            </Formik>
        </>
    );
};
