import React from 'react';
import { UseFormMethods } from 'react-hook-form';
import styled from 'styled-components';

interface IProps {
    name: string;
    placeholder?: string;
    errors: UseFormMethods['errors'];
    innnerRef: any; // FIXME
}

const StyledInputWrapper = styled.div`
    display: flex;
    background: #fff;
    border-radius: 8px;
    padding: 18px 24px;
    width: 100%;
    font-size: 16px;

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #87879c;

        &::placeholder {
            color: #b7a7bc;
        }
    }
`

export const StyledInputElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    & + div {
        margin-top: 24px;
    }

    span.error {
        color: red;
        margin-left: 24px;
        margin-top: 2px;
        font-size: 14px;
    }
`;

const ErrorMessage = ({ error }: { error?: string }) => {
    if (error === undefined) return null

    return <span className="error">{error || 'Campo obrigatório'}</span>
}

const FormInput = ({ name, placeholder, errors, innnerRef }: IProps) => {
    const error = errors[name]?.message

    return (
        <StyledInputElement>
            <StyledInputWrapper>
                <input
                    name={name}
                    placeholder={placeholder}
                    ref={innnerRef}
                />
            </StyledInputWrapper>

            <ErrorMessage error={error} />
        </StyledInputElement>
    )
}

export default FormInput