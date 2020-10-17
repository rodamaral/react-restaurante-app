import React, { useCallback, useState } from 'react'
import './App.css'
import favicon from './assets/icons/favicon.svg'
import DialogAddFood from './components/DialogAddFood'
import FoodList from './components/FoodList'
import Header from './components/Header'
import { useFavicon, useTitle } from './hooks'

export default function App() {
    useTitle('GoRestaurant')
    useFavicon(favicon)

    const [pratoModal, setPratoModal] = useState(false)

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

            <FoodList />

            <DialogAddFood open={pratoModal} onClose={onCloseModal} />
        </div>
    )
}
