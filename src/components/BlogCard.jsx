import React from 'react'
import '../css/BlogCard.css'

export default function BlogCard({blog}) {
  return (
    <div className='blog-card'>
        <h3 className='blog-subject'>{blog.subject}</h3>
        <p className='blog-body'>{blog.body}</p>
    </div>
  );
};
