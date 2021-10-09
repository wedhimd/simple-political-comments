import { useState, useEffect } from "react";
import BlogList from "../blogList/BlogList";

import "./Home.css"

const Home = () => {
    const [blogs, setblogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then((res)=>{
            return res.json()
        })
        .then(data =>{
            setblogs(data);
            setIsLoading(false)
        })
    },[])
    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;