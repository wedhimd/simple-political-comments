import { useEffect, useState } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const abortCtl = new AbortController();

        setTimeout(() =>{

            fetch(url, {signal: abortCtl.signal})
                .then((res)=>{
                    if(!res.ok){
                        throw Error("Something went wrong! could not fetch that resource")
                    }
                    return res.json()
                })
                .then(data =>{
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err =>{
                    if(err.name === "AbortError"){
                        console.log("fetch aborted")
                    }else{
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000)

            return () => abortCtl.abort();
    }, [url])

    return{data, isPending, error}
}
 
export default useFetch;