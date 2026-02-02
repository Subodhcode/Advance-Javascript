import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import founderimg from "./assets/images/img.jpg"

function App() {
  let n=10
  let m=200

  let cname=20;

  let status=true

  let user=["ram","ravi","hari","gita","laxmi","krishna"]

  let alluser=user.map((value,index)=><div>{index+1}{value}</div>)

  return (
    <>

      {alluser}
      <ul >
        {
    user.map(
      (value, index)=>{
        return(
        <li>{index+1}   {value}</li>
        )
      }
    )
  }

  {user.map((value,index)=><li>{index+1} {value}</li>)}
      </ul>
    <div style={{color:"red",fontSize:"50px"}}>{/*inline css this is comment,retun ke beech me wahi chiz kaam kaari gi jo khud retun hoogi->map,filter chalegaa   {nhi chalgea  ->for of ,forin forloop number nhi chalgea */}
      welcome
    </div>
    <img src={founderimg} alt="" />
      <h1>Welcome{n+m}{cname}</h1>

    {
      status?<p>Welcome to ws</p>:<p>No Data Found</p>
    }
    {status && <p>True </p>}
     
    </>
  )
}

export default App
