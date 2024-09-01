import React, {useEffect, useState} from 'react'
import { getBlogs } from '../api/api'
import BlogCard from './BlogCard';
import '../css/BlogList.css'

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs();
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

  return (
    <div>
        <h1>Blog List</h1>
        {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
        ))}
    </div>
  );
};