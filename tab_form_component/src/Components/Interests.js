import React from 'react'

const Interests = ({ data, setData }) => {
    const { interests } = data
    const handleDataChange=(e, name)=>{
        setData((prevState)=>({
            ...prevState,
            interests:e.target.checked ?
            [...prevState.interests, e.target.name] : 
            prevState.interests.filter((i)=> i!==e.target.name)            
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
                        onChange={handleDataChange} />
                    Coding
                </label> 
            </div>
            <div>
                <label>
                    <input type="checkbox"
                        name="music"
                        checked={interests.includes("music")} 
                        onChange={handleDataChange}/>
                    Music
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"
                        name="reading"
                        checked={interests.includes("reading")} 
                        onChange={handleDataChange}/>
                    Reading
                </label>
            </div>
        </div>
    )
}

export default Interests