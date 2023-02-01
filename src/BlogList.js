import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs, title, deleteHandle }) {
  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <br />
            <p>
              <b>Written by </b>
              {blog.author}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
