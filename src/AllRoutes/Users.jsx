import React, { useContext, useEffect, useState } from 'react'
import { Link,useSearchParams } from 'react-router-dom'
// import { AuthContext } from '../Context/AuthContext';

const Users = () => {
    const [data, setData] =useState([]);
    const [page, setPage]= useState(Number(searchParams.get("page")) || 1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        setSearchParams({
            page
        })
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.data)
        })
    },[page]);

   
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
        <div>
            <button disabled={page===1} onClick={()=> setPage(1)}>1</button>
            <button disabled={page===2} onClick={()=> setPage(2)}>2</button>
        </div>
    </div>
  )
}

export default Users