import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [data, setData] =useState([]);
    useEffect(()=>{
        fetch(`https://reqres.in/api/users`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.data)
        })
    },[]);
  return (
    <div>
        <h3>Users Page</h3>
        <div>
            {data.map((user)=>(
                <div key={user.id}>
                    <h3>{user.first_name}</h3>
                    <img src={user.avatar} alt="" />
                    <div>
                    <Link to={`/users/${user.id}`}>Show more deatails</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Users