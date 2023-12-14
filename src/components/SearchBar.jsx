import { useState } from "react"

const SearchBar = ({players}) => {
    const [searchPlayer, setSearchPlayer] = useState('')

    const filteredPlayer = players.filter((player) => {
        return player.name.indexOf(searchPlayer) !== -1
    })

    return (
        <div>
            <hr />
            <h3>Search Bar</h3>
            <label>
                <input 
                type="text" 
                value={searchPlayer}
                onChange={(event) => {setSearchPlayer(event.target.value)}}
                />
            </label>
            {
                searchPlayer.length > 0 ? 
                <h3>
                    <p>Vewing {filteredPlayer.length} of {players.length}</p>
                    <ul>
                        {filteredPlayer.map((player) => {
                            return <li key={player.id}>{player.name}</li>
                        })}
                    </ul>
                </h3> : null
            }
        </div>
    )
}

export default SearchBar