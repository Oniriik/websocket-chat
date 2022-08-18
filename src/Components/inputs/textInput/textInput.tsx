import { FormikProps, FieldInputProps } from 'formik';

import { ITextInput, ConditionalProps } from './interfaces';
import * as Styled from './styled';

export const TextInput: React.FC<ITextInput> = ({
    disabled,
    form,
    field,
    type,
    placeholder,
    errorPosition,
    errorClassName,
    min,
    max,
    step,
}) => {
    const conditionalProps = {} as ConditionalProps;
    if (max) {
        conditionalProps.max = max;
    }
    if (step) {
        conditionalProps.step = step;
    }

    const { errors, touched } = form;

    return (
        <Styled.Wrapper>
            <Styled.Field
                type={type}
                placeholder={placeholder}
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                disabled={disabled}
                min={min || 0}
                {...conditionalProps}
            />
            {!disabled && touched[field.name] && (
                <Styled.Error $position={errorPosition} className={errorClassName}>
                    {errors[field.name]}
                </Styled.Error>
            )}
        </Styled.Wrapper>
    );
};

TextInput.defaultProps = {
    disabled: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: {} as FormikProps<any>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: {} as FieldInputProps<any>,
    type: 'text',
    placeholder: '',
    errorPosition: 'right',
    errorClassName: '',
    min: 0,
    max: 0,
    step: 1,
};
