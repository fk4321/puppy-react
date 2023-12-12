import { Link } from "react-router-dom"

const AllPlayers = ({players}) => {
    return (
        <div>
            {players.map((player) => {
                return (
                    <li>
                        <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </li>
                )
            })}
        </div>
    )
}
export default AllPlayers