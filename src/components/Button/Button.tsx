import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
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
        background: #41c900;
        border-radius: 0 8px 8px 0;
        margin: 0 auto;
    }
`;

type ButtonTypes = "button" | "submit" | "reset" | undefined

interface IButtonProps {
    label: string,
    type?: ButtonTypes,
    icon?: React.ReactNode,
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ label, icon, type = "button", onClick }) => (
    <Container
        type={type}
        onClick={onClick}
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
