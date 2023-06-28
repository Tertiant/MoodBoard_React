import { useState } from 'react'
import { CardInterface } from './interfaces/CardInterface'
import './App.css'
import { SeedButton } from './Components/SeedButton/SeedButton'
import { CardList } from './Components/CardList/CardList'

function App() {
  const [cards, setCards] = useState<CardInterface[]>([]);

  return (
    <>
      <SeedButton cards={cards} setCards={setCards}/>
      <CardList cards={cards} setCards={setCards}/>
    </>
  )
}

export default App
