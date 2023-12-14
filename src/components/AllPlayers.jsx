import { Link, Route, Routes } from "react-router-dom"
import SinglePlayer from "./SinglePlayer"

const AllPlayers = ({players}) => {
    return (
        <div>
            {players.map((player) => {
                return (
                    <Link key={player.id} to={`/players/${player.id}`}>
                        <li>
                        {player.name}
                        </li>
                    </Link>
                )
            })}      
        </div>      
    )
}
export default AllPlayers