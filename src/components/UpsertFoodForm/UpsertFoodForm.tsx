import { useSnackbar } from 'notistack';
import React, { useContext, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { FiCheckSquare, FiEdit3 } from 'react-icons/fi';
import styled from 'styled-components';
import { FoodContext } from '../../contexts/FoodContext';
import api from '../../services/api';
import IFood from '../../types/IFood';
import { validateImageURL, validatePrice } from '../../utils/validation';
import Button from '../Button';
import FormInput from '../FormInput';

interface IProps {
    selectedFood: IFood | undefined;
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

const UpsertFoodForm: React.FC<IProps> = ({
    selectedFood,
    onClose,
}) => {
    const id = selectedFood?.id
    const { register, handleSubmit, errors } = useForm({
        defaultValues: selectedFood
    });
    const { setFoodList, editFood } = useContext(FoodContext)
    const { enqueueSnackbar } = useSnackbar()
    const isEdit = useMemo(() => id !== undefined, [id])

    const onSubmit = async (data: any) => {
        try {
            if (isEdit) {
                await editFood({ ...data, id })
            } else {
                const response = await api.post('foods', {
                    ...data,
                    available: true,
                });
                setFoodList((old: IFood[]) => [...old, response.data as IFood])
                enqueueSnackbar('Prato adicionado com sucesso', { variant: 'success' })
            }

            onClose()
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isEdit ? 'Editar' : 'Novo'} Prato {selectedFood?.id}</h1>

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
                label={isEdit ? 'Editar Prato' : 'Adicionar Prato'}
                type="submit"
                icon={isEdit ? <FiEdit3 size={24} /> : <FiCheckSquare size={24} />}
            />
        </Form>
    );
};

export default UpsertFoodForm;
