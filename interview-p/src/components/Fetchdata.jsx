import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const Fetchdata = () => {

    const [users, setusers] = useState([])
    const [posts, setposts] = useState([])
    const [loading, setload] = useState(true)
    const [error, seterr] = useState(null)
    const [val,setval] =  useState("")

    const debouncing = useDebounce(val,500)
    async function alldata() {
        try {


            const [usersdata, postsdata] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users"), fetch("https://jsonplaceholder.typicode.com/posts")])
            const usersd = await usersdata.json()
            const postsd = await postsdata.json()
            setusers(usersd)
            setposts(postsd)
            setload(false)
        } catch (err) {
            seterr(err)
            setload(false)
        }


    }

    useEffect(() => {
        alldata()
    }, [])

    let usermap = {}

    users.forEach(u=>{
        usermap[u.id]= u
    })

    const mergealldata = posts.map(p=>({
        ...p,
        user: usermap[p.userId]
    }))

    let filterdata = mergealldata.filter((f)=>(
        (f.title.toLowerCase().includes(debouncing.toLowerCase()) || f.user.name.toLowerCase().includes(debouncing.toLowerCase()))
    ))
    if (loading) return <div>Loading...</div>


    if (error) return <div>Error</div>


    return (
        <div>
<input onChange={(e)=>setval(e.target.value)} type="text" value={val} placeholder='enter your post title or author name..' />

<div className="container">
      {filterdata.map((item)=>(
  
    <div className="card" key={item.id}>
      <h2 className="title">{item.title}</h2>
      <p className="body">{item.body}</p>

      <div className="author">
        <span>Author Name: {item.user.name}</span>
        <span>{item.user.email}</span>
      </div>
    </div>

)
)}
</div>

        </div>
    )
}

export default Fetchdata
