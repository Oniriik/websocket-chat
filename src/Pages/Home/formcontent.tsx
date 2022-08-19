import React from 'react';
import { Field, FormikProps } from 'formik';
import { TextInput, Button } from 'Components';
import { Form } from 'formik';
import { IUsername } from './config';

export const FormContent: React.FC<FormikProps<IUsername>> = ({ isValid }) => {
    return (
        <Form>
            <Field
                name="username"
                type="text"
                placeholder="Enter your username"
                component={TextInput}
                errorPosition="bottom" />
            <Button disabled={!isValid} type="submit">
                Send
            </Button>
        </Form>);
};
