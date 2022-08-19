import * as Yup from 'yup';

export type LocationState = { username: string };

export const validationSchema = Yup.object().shape({
    author:Yup.string().required('Username  {}is required.'),
    payload:Yup.string().required('Message is required.'),
});