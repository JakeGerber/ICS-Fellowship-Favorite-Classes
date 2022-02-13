import React, {useState} from "react"
import Class from "../Class/Class"
import "./Home.css"


function Home(props) {

    const [value, setValue] = useState('')
    const [favoriteClass, setClasses] = useState([])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!favoriteClass.includes(value)) {
            setClasses(favoriteClass.concat(value))
            setValue("")
        }
        console.log(favoriteClass)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form>
            <div className = "my-classes">
                {favoriteClass.map((favClass) =>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    )
}

export default Home