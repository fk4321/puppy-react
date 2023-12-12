import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import AllPlayers from './components/AllPlayers'

function App() {
  const [players, setPlayers] = useState([])

  //fetch data 
  useEffect(() => {
    const playerData = async () => {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      //update state
      setPlayers(response.data.data.players)
      console.log(response.data.data.players)
    }
    playerData()
  },[])

  return (
    <div>
      <AllPlayers players={players}/>
    </div>
  )
}

export default App
