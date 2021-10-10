import { useState, useEffect } from "react";
import BlogList from "../blogList/BlogList";

import "./Home.css"

const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
            .then((res)=>{
                if(!res.ok){
                    throw Error("Something went wrong! could not fetch that resource")
                }
                return res.json()
            })
            .then(data =>{
                setblogs(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err =>{
                setIsLoading(false)
                setError(err.message)
            })
    }, [])
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;