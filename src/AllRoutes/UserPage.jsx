import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {
    
   
    const [data, setData] =useState({});
    const params= useParams();
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${params.user_id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.data)
        })
    },[]);
  return (
    <div>
        <h1>User {params.id}</h1>
        <h3>Name: {data.first_name}</h3>
        <img src={data.avatar} alt="" />
        <div>
            <Link to="/users">Go Back</Link>
        </div>
    </div>
  )
}

export default UserPage