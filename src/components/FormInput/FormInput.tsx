import React from 'react';
import styled from 'styled-components';

interface IProps {
    name: string;
    placeholder: string;
    label?: string;
    errors?: any;
    register: any;
}

const StyledInputWrapper = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 18px 24px;
    width: 100%;
    font-size: 16px;

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #b7b7cc;

        &::placeholder {
            color: #b7b7cc;
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

const ErrorMessage = () => <span className="error">Campo obrigatório</span>

const FormInput = ({ name, placeholder, errors, register }: IProps) => {
    return (
        <StyledInputElement>
            <StyledInputWrapper>
                <input
                    name={name}
                    placeholder={placeholder}
                    ref={register({ required: true })}
                />
            </StyledInputWrapper>

            {errors[name] && <ErrorMessage />}
        </StyledInputElement>
    )
}

export default FormInput