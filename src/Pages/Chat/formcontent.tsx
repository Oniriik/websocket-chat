import React from 'react';
import { Field, FormikProps } from 'formik';
import { IMessage } from 'Types';
import { TextInput, Button } from 'Components';

import * as Styled from './styled';

export const FormContent: React.FC<FormikProps<IMessage>> = ({ isValid }) => {
    return (
        <Styled.Form>
            <Field
                name="payload"
                type="text"
                placeholder="Enter your message"
                component={TextInput}
                errorPosition="bottom" />
            <Button disabled={!isValid} type="submit">
                Send
            </Button>
        </Styled.Form>);
};
