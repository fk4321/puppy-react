import { useParams } from "react-router-dom"
import { useState } from "react"

const SinglePlayer = ({players, deleteThing, updateThing}) => {
    // access id when player is clicked
    const params = useParams()
    const id = params.id*1
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('')
    const [imageUrl, setImageurl] = useState('')

    const findPlayer = players.find((player) => {
        return id === player.id
    })

    if (!findPlayer){
        return null
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedThing = {
            id,
            name,
            breed,
            status,
            imageUrl
        }
        updateThing(updatedThing)
    }

    return (
        <div>
            <h4>Name: {findPlayer.name}</h4>
            <h4>Breed: {findPlayer.breed}</h4>
            <h4>Image Url: {findPlayer.imageUrl}</h4>
            <hr />
            <h3>Click to delete item</h3>
            <button >Delete</button>  
            <hr />
            <h3>Update Thing</h3>   

            <form onSubmit={handleSubmit}>
                <label>Name
                    <input 
                    type="text" 
                    value= {name}
                    onChange={(event) => {setName(event.target.value)}}
                    />
                </label>
                <label>Breed
                    <input 
                    type="text" 
                    value= {breed}
                    onChange={(event) => {setBreed(event.target.value)}}
                    />
                </label>
                <label>Status
                    <input 
                    type="text" 
                    value= {status}
                    onChange={(event) => {setStatus(event.target.value)}}
                    />
                </label>
                <label>Image Url
                    <input 
                    type="text" 
                    value= {imageUrl}
                    onChange={(event) => {setImageurl(event.target.value)}}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>    
        </div>
    )
}
export default SinglePlayer