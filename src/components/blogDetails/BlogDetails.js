import { useParams } from "react-router";
import useFetch from "../../useFetch";

import "./BlogDetails.css"

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <small> {blog.author} </small>
                    <div> {blog.body} </div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;