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
        if (!favoriteClass.includes(value.trim()) && value.trim() !== "") {
            setClasses(favoriteClass.concat(value.trim()))
            setValue("")
        }
        console.log(favoriteClass)
    }

    return (
        <div id="background">
            <h1 id="title">Add Your Favorite Class!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="text-enter">Enter: </label>
                    <input type="text" className="text-enter" value={value} onChange={handleChange}></input>
                    <button type="submit" className="text-enter">Add Class!</button>
                </div>
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