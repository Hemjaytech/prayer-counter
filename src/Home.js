import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data: blogs, isPending, error, setBlogs, blog } = useFetch(
    'http://localhost:8000/blogs'
  );

  const deleteHandle = (id) => {
    const newBlogs = blogs.filter((blogs) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className='home'>
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} deleteHandle={deleteHandle} title='All Blogs' />
      )}
    </div>
  );
}

export default Home;
