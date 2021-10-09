import { useState } from "react";
import BlogList from "../blogList/BlogList";

import "./Home.css"

const Home = () => {
    const [blogs, setblogs] = useState([
        {title: "my new website", body: "lorem ipsum...", author: "Ali", id: 1},
        {title: "welcome party", body: "lorem ipsum...", author: "himd", id: 2},
        {title: "web dev top tips", body: "lorem ipsum...", author: "Ali", id: 3}
    ]);

    const handleDelete = (id)=>{
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(updatedBlogs)
    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;