import React from 'react'

const Profile = ({data, setData}) => {
  const {name, email,age}=data
  const handleOnChangeData =(e,item)=>{
        setData(prevState=>({
            ...prevState,
            [item]:e.target.value
        }))
  }
  return (
    <div>
        <div>
            <label>Name :</label>
            <input type="text" 
            value={name}
            onChange={(e)=>handleOnChangeData(e, "name")}/>
        </div>
        <div>
            <label>Age :</label>
            <input type="Number"
            value={age}
            onChange={(e)=>handleOnChangeData(e, "age")} />
        </div>
        <div>
        <label>Email:</label>
        <input type= "text" 
        value={email}
        onChange={(e)=>handleOnChangeData(e, "email")}/>
        </div>
    </div>
  )
}

export default Profile