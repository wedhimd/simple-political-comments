// import "../../useFetch";
import useFetch from "../../useFetch";
import BlogList from "../blogList/BlogList";

import "./Home.css"

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;