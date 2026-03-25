import { useEffect, useMemo, useState } from "react";
import useFetchandmerged from "../hooks/useFetchandmerged"
import Sidebar from "./Sidebar";
import Controlers from "./Controlers";
import Skeletonpost from "./Skeletonpost";
import Postcard from "./Postcard";


const Dashboard = ()=>{
    const {posts,users,userpostcount,loading,error,retry} =   useFetchandmerged();
    const [searchval,setsearchval] = useState("")
    const [debounceval,setdebounceval] = useState("")
    const [sortby,setsortby] =  useState('id')
    const [selectedid,setselectedid] = useState([])

    const [page,setpage] =  useState(1)
    const postperpage = 9;

    useEffect(()=>{
        const timer = setTimeout(() => {
            setdebounceval(searchval)
            setpage(1)
        }, 500);
        return ()=> clearTimeout(timer)
    },[searchval])


    const togglefilter = (userid)=>{
        setselectedid(prv => prv.includes(userid)? prv.filter(id => id!== userid):[...prv,userid])
        setpage(1)
    }


    const filterposts = useMemo(()=>{
        let result = [...posts]

        if(selectedid.length > 0){
            result = result.filter(p=> selectedid.includes(p.userId))
        }

        if(debounceval){
            result = result.filter(p=>
                p.title.toLowerCase().includes(debounceval.toLowerCase())
            )
        }

        result.sort((a,b)=>{
            if(sortby == 'title-asc') return a.title.localeCompare(b.title);
            if(sortby == 'title-desc') return b.title.localeCompare(a.title);
            if(sortby == "author") return a.author.localeCompare(b.author)

                return a.id - b.id
        })

        return result
    },[posts,debounceval,sortby,selectedid])



    const paginatedposts =  useMemo(()=>{
        const start = (page-1) * postperpage
        return filterposts.slice(0,page * postperpage)
    },[filterposts,page])

    if(error){
        return (
            <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center',
        gap: '20px'
      }}>

        <div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Something Went wrong!</h2>

 <p style={{ color: 'var(--text-muted)' }}>{error}</p>

        </div>
<button onClick={retry}  style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'var(--transition)'
          }}>Retry Fetch</button>


            </div>
        )
    }

    return (



        <div style={{display:"flex", width:'100%'}}>
            <Sidebar users={users} postcounts={userpostcount} loading={loading} selectedids={selectedid} ontoggle={togglefilter}/>

            <main style={{ flex: 1, padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
                <header style={{ marginBottom: '40px' }}>

                    <h1>Dashboard</h1>
                    <p>Insightful views of community posts</p>

                </header>


                <Controlers
                searchval={searchval} setchange={setsearchval} sortby={sortby} setsortby={setsortby}/>

                <div style={{
                    display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px,1fr))", gap:'24px', marginBlock:"40px"
                }}>
                    {loading ? (
                        Array.from({length:6}).map((_,i)=> <Skeletonpost key={i}/>) 

                        ): paginatedposts.length > 0?(paginatedposts.map(p => <Postcard key={p.id} post={p}/> )):(
                            <div>

                                <h3>No posts found </h3>
                            </div>
                        
                    )}


                </div>



            </main>






        </div>
    )

}


export default Dashboard