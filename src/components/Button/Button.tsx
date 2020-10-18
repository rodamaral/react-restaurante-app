import React from 'react';
import styled from 'styled-components';

type Variants = "warning" | "cancel"
type ButtonTypes = "button" | "submit" | "reset" | undefined

interface IProps {
    warning?: boolean;
    variant?: Variants;
}

const colors: Partial<Record<Variants, any>> = {
    warning: {
        label: '#c72828',
        icon: '#ed1414'
    },
    cancel: {
        label: '#bbb',
        icon: '#999'
    },
}

const Container = styled.button<IProps>`
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: ${({ variant }) => variant ? colors[variant].label : "#39b100"};

    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
        padding: 16px 24px;
    }

    .icon {
        display: flex;
        padding: 16px 16px;
        background: ${({ variant }) => variant ? colors[variant].icon : "#41c900"};
        border-radius: 0 8px 8px 0;
        margin: 0 auto;
    }
`;

interface IButtonProps {
    label: string,
    type?: ButtonTypes,
    variant?: Variants,
    icon?: React.ReactNode,
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ label, icon, variant, type = "button", onClick }) => (
    <Container
        type={type}
        onClick={onClick}
        variant={variant}
    >
        <div className="text">{label}</div>

        {
            icon && <div className="icon">
                {icon}
            </div>
        }

    </Container>
);

export default Button;
