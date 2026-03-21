import React, { useEffect, useState } from 'react'

const Fetchdata = () => {

    const [users, setusers] = useState([])
    const [posts, setposts] = useState([])
    const [loading, setload] = useState(true)
    const [error, seterr] = useState(null)

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

    if (loading) return <div>Loading...</div>


    if (error) return <div>Error</div>


    return (
        <div>


      {mergealldata.map((item)=>(
          <div className="container">
  {mergealldata.map((item) => (
    <div className="card" key={item.id}>
      <h2 className="title">{item.title}</h2>
      <p className="body">{item.body}</p>

      <div className="author">
        <span>Author Name: {item.user.name}</span>
        <span>{item.user.email}</span>
      </div>
    </div>
  ))}
</div>
      )
      )}

        </div>
    )
}

export default Fetchdata
