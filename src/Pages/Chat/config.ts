import * as Yup from 'yup';
import { IMessage } from 'Types';

export const initialValues: IMessage = {
    author:'',
    payload:'',
};
export const validationSchema = Yup.object().shape({
    author:Yup.string().required('Username is required.'),
    payload:Yup.string().required('Message is required.'),
});