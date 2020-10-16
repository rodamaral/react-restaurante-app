import React from 'react'
import './App.css'
import favicon from './assets/icons/favicon.svg'
import { useFavicon, useMount, useTitle } from './hooks'

export default function App() {
    useTitle('GoRestaurant')
    useFavicon(favicon)

    useMount(() => {
        console.log('Mounted')
    })

    return (
        <div>
            <header>Header</header>

            <main>
                Main
            </main>
        </div>
    )
}
