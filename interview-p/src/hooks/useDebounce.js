import { useEffect, useState } from "react";


function useDebounce(val,delay){

    const [debounceval,setdebouncev] =  useState(val)

    useEffect(()=>{

        let timer = setTimeout(() => {
            setdebouncev(val)
        }, delay);
        return ()=>{
            clearTimeout(timer)
        }
    },[val,delay])
    return debounceval
}

export default useDebounce