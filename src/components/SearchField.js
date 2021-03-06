import { useState } from "react"

const SearchField = ({setPosts, setUrl, url, setLoading}) => {

    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = String(today.getFullYear())
    const curiosityMax = `${year}-${month}-${day}`

    const roverDates={
        "curiosity": {"min": "2012-08-06", "max": curiosityMax},
        "opportunity": {"min": "2004-01-25", "max": "2018-06-11"},
        "spirit": {"min": "2004-01-04", "max": "2010-03-21"}
    }

    const [rover, setRover] = useState("curiosity")
    const [min, setMin] = useState("2012-08-06")
    const [max, setMax] = useState(curiosityMax)
    const [date, setDate] = useState(curiosityMax)

    const handleRoverChange = (e) => {
        setRover(e.target.value)
        const dateField = document.querySelector(".search-field form input")
        dateField.value = roverDates[e.target.value]["max"]
        setDate(roverDates[e.target.value]["max"])
        setMin(roverDates[e.target.value]["min"])
        setMax(roverDates[e.target.value]["max"])
    }

    const handleSearch = (e, rover, date) => {
        e.preventDefault()
        const newUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=7iOnoLRhQuWpZJTy7D76y65CbiAEHjOhqezrD6bj`
        if(newUrl !== url){
            setPosts([])
            setLoading(true)
            setUrl(newUrl)
        }
    }

    return (
        <div className="search-field">
            <h3>Search:</h3> 
            <form onSubmit={e => handleSearch(e, rover, date)}>
                <label htmlFor="rover-select">Rover:</label>
                <select id="rover-select" onChange={e => handleRoverChange(e)}>
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                </select>
                <input type="date" min={min} max={max} onChange={e => setDate(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchField
