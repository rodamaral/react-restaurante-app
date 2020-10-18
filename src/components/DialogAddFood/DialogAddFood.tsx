import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { FoodContext } from '../../contexts/FoodContext';
import api from '../../services/api';
import IFood from '../../types/IFood';
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
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Novo Prato</h1>

                <FormInput name="image"
                    placeholder="Cole o link aqui"
                    register={register}
                    errors={errors}
                />

                <FormInput name="name"
                    placeholder="Ex: Moda Italiana"
                    register={register}
                    errors={errors}
                />

                <FormInput name="price"
                    placeholder="Ex: 19.90"
                    register={register}
                    errors={errors}
                />

                <FormInput name="description"
                    placeholder="Descrição"
                    register={register}
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
