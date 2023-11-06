import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Bloglist = ({blogs, title, handleDelete}) => {
  return (
    <div className='Bloglist'>
        <h3>{title}</h3>
      {blogs.map((blog) => (
          <div className='blog' key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Written by {blog.author}</p>
            <button className='delete' onClick={()=>handleDelete(blog.id)}><FontAwesomeIcon icon={faTrash}/></button>
          </div>
        ))}
    </div>
  )
}

export default Bloglist
