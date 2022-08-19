import styled, { css } from 'styled-components';

type ErrorType = {
    $position: string;
};

type FieldType = {
    disabled: boolean;
};

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const errorRightStyles = css`
    margin-left: 10px;
    right: 40px;
`;

const errorBottomStyles = css`
    left: 0;
    bottom: -17px;
`;

export const Error = styled.span`
    position: absolute;
    margin-left: 5px;
    transition: margin-left 0.4ms linear;
    transition: bottom 0.4s linear;
    color: red;
    font-size: 12px;

    ${({ $position }: ErrorType) => {
        if ($position === 'right') {
            return errorRightStyles;
        }

        if ($position === 'bottom') {
            return errorBottomStyles;
        }

        return '';
    }}
`;

export const Field = styled.input`
    width: 293px;
    min-height: 40px;
    border-radius: 5px;
    border: 1px solid #F0F0F0;
    padding: 9px 15px;
    color: black;
    font-size: 14px;
    height: 1.57;

    ${({ disabled }: FieldType) => disabled && `
        border-color: transparent;
        cursor: not-allowed;
    `}
`;
