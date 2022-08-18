import React from 'react';
import { Field, FormikProps } from 'formik';
import { IMessage } from 'Types';
import { TextInput, Button } from 'Components';

import * as Styled from './styled';

export const FormContent: React.FC<FormikProps<IMessage>> = ({ isValid }) => (
    <Styled.Form>
        <Field
            name="author"
            type="text"
            placeholder="Enter your username"
            component={TextInput}
            errorPosition="bottom"
        />
        <Field
            name="payload"
            type="text"
            placeholder="Enter your message"
            component={TextInput}
            errorPosition="bottom"
        />
        <Styled.ButtonWrapper>
            <Button disabled={!isValid} type="submit">
                Login
            </Button>
        </Styled.ButtonWrapper>
    </Styled.Form>
);
