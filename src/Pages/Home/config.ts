import * as Yup from 'yup';

export type IUsername ={
    username: string;
};
export const initialValues = {
    username:'',
};
export const validationSchema = Yup.object().shape({
    username:Yup.string().required('Username is required.'),
});