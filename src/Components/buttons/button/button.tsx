import React, { PropsWithChildren } from 'react';

import { emptyFunction } from 'Utils';

import { IButton } from './interfaces';
import * as Styled from './styled';

export const Button: React.FC<PropsWithChildren<IButton>> = ({
    children,
    icon,
    onClick,
    buttonType,
    type,
    disabled,
    loading,
    className,
}) => {
    const onClickHandler = (event: React.SyntheticEvent) => {
        if (loading) {
            return;
        }

        onClick && onClick(event);
    };

    return (
        <Styled.Button
            htmlType={type}
            $buttonType={buttonType}
            className={className}
            onClick={onClickHandler}
            disabled={disabled}
            loading={loading}
        >
            {icon && (
                <span>
                    {icon}
                </span>
            )}
            {children}
        </Styled.Button>
    );
};

Button.defaultProps = {
    icon: null,
    onClick: emptyFunction,
    buttonType: 'filled',
    type: 'button',
    disabled: false,
    loading: false,
    className: '',
};
