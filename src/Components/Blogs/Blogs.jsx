import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handleAddToBooksMArk, handleMarkAsRead }) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])




    return (
        <div className="md:w-2/3">
            <h2 className="mb-4 font-bold text-3xl">Blogs</h2>
            {
                blogs.map(blog =>
                    <Blog
                        blog={blog}
                        key={blog.ID}
                        handleAddToBooksMArk={handleAddToBooksMArk}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }

        </div>
    );
};

export default Blogs;