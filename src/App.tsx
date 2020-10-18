import { useSnackbar } from 'notistack'
import React, { useCallback, useState } from 'react'
import './App.css'
import favicon from './assets/icons/favicon.svg'
import DialogAddFood from './components/DialogAddFood'
import FoodList from './components/FoodList'
import Header from './components/Header'
import LoadingBackdrop from './components/LoadingBackdrop'
import { FoodContext } from './contexts/FoodContext'
import { useFavicon, useMount, useTitle } from './hooks'
import api from './services/api'
import IFood from './types/IFood'

export default function App() {
    useTitle('GoRestaurant')
    useFavicon(favicon)
    const { enqueueSnackbar } = useSnackbar()

    const [food, setFood] = useState<IFood | undefined>()
    const [pratoModal, setPratoModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [foodList, setFoodList] = useState<IFood[]>([])

    useMount(async () => {
        try {
            setLoading(true)
            const foods = await api.get('foods')
            setFoodList(foods.data)
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        } finally {
            setLoading(false)
        }
    })

    const onOpenModal = useCallback(
        () => {
            setPratoModal(true)
        },
        [],
    )

    const onSelectFood = useCallback(
        (food: IFood) => {
            setPratoModal(true)
            setFood(food)
        },
        [],
    )

    const onCloseModal = useCallback(
        () => {
            setPratoModal(false)
        },
        [],
    )

    async function deleteFood(id: number): Promise<void> {
        try {
            setLoading(true)
            await api.delete(`foods/${id}`);
            setFoodList(old => old.filter(food => food.id !== id));
            enqueueSnackbar('Prato deletado com sucesso', { variant: 'success' })
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        } finally {
            setLoading(false)
        }
    }

    async function editFood(food: IFood): Promise<void> {
        try {
            setLoading(true)
            const response = await api.put(`foods/${food.id}`, food);

            setFoodList(state =>
                state.map(old => old.id === food.id ? { ...response.data } : old)
            );
            enqueueSnackbar('Prato editado com sucesso', { variant: 'success' })
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FoodContext.Provider value={{ foodList, setFoodList, deleteFood, editFood, onSelectFood }}>
            <Header openModal={onOpenModal} />

            <FoodList foodList={foodList} />

            <LoadingBackdrop open={loading} />

            <DialogAddFood selectedFood={food} open={pratoModal} onClose={onCloseModal} />
        </FoodContext.Provider>
    )
}
