import { useEffect, useState } from "react"


const useFetchandmerged = () => {

    const [data, setdata] = useState({ posts: [], users: [], userpostcount: {} })
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    const fetchdata = async () => {
        setloading(true)
        seterror(null)

        try {
            const [usersdata, postsdata] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users"), fetch("https://jsonplaceholder.typicode.com/posts")])

            if (!usersdata.ok || !postsdata.ok) {
                throw new Error("Failed to fetch data")

            }

            const users = await usersdata.json()
            const posts = await postsdata.json()

            const usermap = users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {})

            const counts = posts.reduce((acc, post) => {
                acc[post.userId] = (acc[post.userId] || 0) + 1
                return acc
            }, {})


            const mergedata = posts.map(p => ({
                ...p,
                author: usermap[p.userId]?.name || "Unknown",
                email: usermap[p.userId]?.email || "n/a"
            }))


            setdata({
                posts: mergedata,
                users: users,
                userpostcount: counts
            })
        }
        catch (err) {
            seterror(err.message)
           
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return { ...data, loading, error, retry: fetchdata }

}


export default useFetchandmerged