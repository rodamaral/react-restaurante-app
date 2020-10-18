import { useSnackbar } from 'notistack';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { FoodContext } from '../../contexts/FoodContext';
import api from '../../services/api';
import IFood from '../../types/IFood';
import { validateImageURL, validatePrice } from '../../utils/validation';
import Button from '../Button';
import Dialog from '../Dialog';
import FormInput from '../FormInput';

interface IModalProps {
    open: boolean;
    onClose: () => void;
}

const Form = styled.form`
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    background: #F0F5F5;

    h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 40px;
    }

    button {
        margin-top: 48px;
        align-self: flex-end;
    }
`;

const ModalAddFood: React.FC<IModalProps> = ({
    open,
    onClose,
}) => {
    const { register, handleSubmit, errors } = useForm();
    const { setFoodList } = useContext(FoodContext)
    const { enqueueSnackbar } = useSnackbar()

    const onSubmit = async (data: any) => {
        try {
            const { name, description, image, price } = data;

            const response = await api.post('foods', {
                name,
                description,
                image,
                price,
                available: true,
            });

            setFoodList((old: IFood[]) => [...old, response.data as IFood])
            onClose()
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Novo Prato</h1>

                <FormInput name="image"
                    placeholder="Cole o link aqui"
                    innnerRef={register({ validate: validateImageURL, required: true })}
                    errors={errors}
                />

                <FormInput name="name"
                    placeholder="Ex: Moda Italiana"
                    innnerRef={register({ required: true })}
                    errors={errors}
                />

                <FormInput name="price"
                    placeholder="Ex: 19.90"
                    innnerRef={register({ validate: validatePrice, required: true })}
                    errors={errors}
                />

                <FormInput name="description"
                    placeholder="Descrição"
                    innnerRef={register({ required: true })}
                    errors={errors}
                />

                <Button
                    label="Adicionar Prato"
                    type="submit"
                    icon="+"
                />
            </Form>
        </Dialog>
    );
};

export default ModalAddFood;
