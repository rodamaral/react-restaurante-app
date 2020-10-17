import React, { useCallback, useState } from 'react'
import './App.css'
import favicon from './assets/icons/favicon.svg'
import DialogAddFood from './components/DialogAddFood'
import FoodList from './components/FoodList'
import Header from './components/Header'
import { useFavicon, useTitle } from './hooks'
import IFood from './types/IFood'

const fakeData: IFood[] = [
    {
        id: 1,
        name: 'Macarronada',
        image: 'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png',
        price: 'R$ 24.23',
        description: 'Descrição do produto',
        available: true,
    },
    {
        id: 2,
        name: 'Arroz e feijão',
        image: 'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png',
        price: 'R$ 13.21',
        description: 'Descrição do arroz e feijão',
        available: false,
    },
]

export default function App() {
    useTitle('GoRestaurant')
    useFavicon(favicon)

    const [pratoModal, setPratoModal] = useState(false)
    const [foodList, setFoodList] = useState<IFood[]>(fakeData) // FIXME

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
        <div>
            <Header openModal={onOpenModal} />

            <FoodList foodList={foodList} />

            <DialogAddFood open={pratoModal} onClose={onCloseModal} />
        </div>
    )
}
