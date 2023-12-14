import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import { Route, Routes } from 'react-router-dom'
import NewPlayer from './components/NewPlayer'
import SearchBar from './components/SearchBar'

function App() {
  const [players, setPlayers] = useState([])

  //fetch data 
  useEffect(() => {
    const playerData = async () => {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      //update state
      setPlayers(response.data.data.players)
    }
    playerData()
  },[])

  const create = async (newThing) => {
    const response = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310/players',newThing)
    const data = response.data.data.players
    setPlayers([...players, data])
  }

  const deleteThing = async (player) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${player.id}`)
    setPlayers(players.filter((_player) => {return _player.id !== player.id}))
    navigate ('/')
  }

  const updateThing = async (updatedThing) => {
    const response = await axios.put(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${updatedThing.id}`, updatedThing)
    const data = response.data.data.players 
    setPlayers(players.map((player) => {return player.id !== data.id ? player : data}))
  }

  return (
    <div>
      <h2>Create a new Player</h2>
      <NewPlayer create={create}/>
      <hr />
      <h3>Puppy Names</h3>
      <AllPlayers players={players}/>
      <hr />
      <h3>Single Puppy Name</h3>
      <Routes>
        <Route path='/players/:id' element={<SinglePlayer players={players} deleteThing={deleteThing} updateThing={updateThing}/>}/>
      </Routes>
      <SearchBar players={players}/>
    </div>
  )
}

export default App
