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

    const onCloseModal = useCallback(
        () => {
            setPratoModal(false)
        },
        [],
    )

    return (
        <FoodContext.Provider value={{ foodList, setFoodList }}>
            <Header openModal={onOpenModal} />

            <FoodList foodList={foodList} />

            <LoadingBackdrop open={loading} />

            <DialogAddFood open={pratoModal} onClose={onCloseModal} />
        </FoodContext.Provider>
    )
}
