import React, { useState } from 'react'
import Profile from './Profile'
import Settings from './Settings'
import Interests from './Interests'
const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData]= useState({
    name: "Rahul",
    age:23,
    email:"rahul@test.com",
    interests:["coding","reading"],
    theme: "dark"
  });
  const Tabs= [{
        name:"Profile",
        component:Profile
    },
    {
        name:"Interests",
        component:Interests
    },
    {
        name:"Settings",
        component:Settings
    }
]
  const ActiveTabComponent = Tabs[activeTab].component;
//   console.log(ActiveTabComponent);
 const handleNextClick =()=>{
    setActiveTab((prev)=> prev+1)
 }
 const handlePrevClick =()=>{
  setActiveTab((prev)=> prev-1)
 }
 const handleSubmit =()=>{
    //TODO
    alert("Form Submitted");
 }
  return (
    <div>
        <div className='heading-container'>
            {Tabs.map((t,index)=>(
                <div className='heading'
                    key={index}
                    onClick={
                        ()=> setActiveTab(index)
                    }>
                    {t.name}
                </div>
            ))}
        </div>
        <div className='tab-body'> 
            <ActiveTabComponent data={data} setData={setData}/>
        </div>
        <div>
          {activeTab > 0 && <button onClick={handlePrevClick}> Previous </button>}  
          {activeTab < Tabs.length-1 && <button onClick={handleNextClick}> Next </button>}
          {activeTab===Tabs.length-1 && <button onClick={handleSubmit}> Submit </button>}
        </div>
    </div>
  )
}

export default TabForm