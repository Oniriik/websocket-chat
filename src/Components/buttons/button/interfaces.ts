import { ReactNode } from 'react';

export interface IButton {
    icon?: ReactNode;
    onClick?: (event: React.SyntheticEvent) => void;
    disabled?: boolean;
    type?: 'button' |'submit' | 'reset';
    className?: string;
    loading?: boolean;
    buttonType?: 'filled' | 'transparent';
}
