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

    const [id, setId] = useState<number | undefined>()
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
            // setId(food.id)
            console.log('selected food', food)
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
            const { id, name, description, price, image } = food;
            const response = await api.put(`foods/${id}`, {
                name,
                description,
                price,
                image,
            });

            setFoodList(state =>
                state.map(old => old.id === id ? { ...response.data } : old)
            );
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FoodContext.Provider value={{ foodList, setFoodList, deleteFood, editFood, id, onSelectFood }}>
            <Header openModal={onOpenModal} />

            <FoodList foodList={foodList} />

            <LoadingBackdrop open={loading} />

            <DialogAddFood id={id} selectedFood={food} open={pratoModal} onClose={onCloseModal} />
        </FoodContext.Provider>
    )
}
