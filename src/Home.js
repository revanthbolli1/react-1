import React from 'react'
import { useState } from 'react'
import Bloglist from './Bloglist'

function Home() {
  const [blogs,setBlogs] = useState([
    { title: "Ironman", body: "A Scientists create robots....", author: "Tony Stark", id: 1},
    { title: "Spiderman", body: "A Radioactive spider bites a kid....  ", author: "Peter Parker", id: 2},
    { title: "Batman", body: "A Hero saves Gotham City....", author: "Bruce Wayne", id: 3}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog)=> blog.id != id)
    setBlogs(newBlogs)
  }
  
  return (
    <div className = "home">
        <Bloglist blogs = {blogs} title= "All Blogs" handleDelete = {handleDelete} />
    </div>
    
  )
}

export default Home
