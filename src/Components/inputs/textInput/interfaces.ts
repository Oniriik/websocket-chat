import { FieldInputProps, FormikProps } from 'formik';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IForm extends FormikProps<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: Record<string, any>;
}

export interface ITextInput {
    disabled?: boolean;
    form?: IForm;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field?: FieldInputProps<any>;
    type?: string;
    placeholder?: string;
    errorPosition?: string;
    errorClassName?: string;
    min?: number;
    max?: number;
    step?: number;
}

export type ConditionalProps = {
    max: number;
    step: number;
};
