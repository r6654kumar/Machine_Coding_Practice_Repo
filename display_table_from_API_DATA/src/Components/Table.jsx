import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Table = () => {
  const [data,setData]= useState([]);
  const [headers,setHeaders]= useState([]);
  const [selectedHeader,setSelectedHeader]= useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const jsonData = response.data;
        console.log(jsonData);
        if(jsonData.length > 0){
            setData(jsonData);
            setHeaders(Object.keys(jsonData[0]));
            setSelectedHeader(Object.keys(jsonData[0][0]));
            // console.log("Test");
        }
    }catch(error){
        console.log(error);
    }
  }
//   const handleSelection= (e)=>{
//     const selected = Array.from(e.target.selectedOptions,(option)=>option.value);
//     setSelectedHeader(selected); 
//   }
  const handleCheckBoxChange= (header)=>{
    setSelectedHeader(prev=>
        prev.includes(header) ? prev.filter(item=>item!==header) : [...prev,header]
    );
  };
  return (
    <>
    <div>
        <label>Select Column Name to be displayed:</label>
        {/* <select multiple value={selectedHeader} onChange={handleSelection}>
            {
                headers.map((header,index)=>(
                    <option key={index} value={header}>{header}</option>
                ))
            }
        </select> */}
        {headers.map((header,index)=>(
            <div key= {index}>
                <input type="checkbox"
                 value={header}
                 checked= {selectedHeader.includes(header)}
                 onChange={()=>handleCheckBoxChange(header)}
                />
                <label >{header}</label>
            </div>
        ))}
        </div>

        {/* Display Table */}
        <table border>
            <thead>
                <tr>
                    {selectedHeader.map((header,index)=>(
                        <th key = {index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item,index1)=>(
                    <tr key={index1}>
                        {selectedHeader.map((header,index2)=>(
                            <td key= {index2}>{typeof(item[header])==="object" ? JSON.stringify(item[header]): item[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
  
}

export default Table  