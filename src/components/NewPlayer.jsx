import { useState } from "react"

const NewPlayer = ({create}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('')
    const [imageUrl, setImageurl] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newThing = {
            name,
            breed, 
            status,
            imageUrl
        }
        create(newThing)
        setName('')
        setBreed('')
        setStatus('')
        setImageurl('')
    }

    return (
        <div>
            <h3>Create a New Player</h3>
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

export default NewPlayer