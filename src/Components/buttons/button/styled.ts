import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';

type ColorStylesType = {
    $buttonType: string;
};

const buttonColors = {
    background: {
        filled: '#325dfa',
        transparent: 'transparent',
    },
    border: {
        filled: '#F0F0F0',
        transparent: '#F0F0F0',
    },
    text: {
        filled: 'white',
        transparent: '#212121',
    },
};

const colorStyles = css`
    background-color: ${({ $buttonType }: ColorStylesType) => buttonColors.background[$buttonType]
        || $buttonType};
    border: 1px solid ${({ $buttonType }: ColorStylesType) => buttonColors.border[$buttonType]};
    color: ${({ $buttonType }: ColorStylesType) => buttonColors.text[$buttonType]};
`;

export const Button = styled(AntButton)`
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    font-size: 14px;
    ${colorStyles}

    &:disabled {
        opacity: 0.5;
        ${colorStyles}

        &:hover {
            ${colorStyles}
        }
    }

    &:hover,
    &:focus {
        ${colorStyles}
    }
`;
