import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [booksMark, setbooksMark] = useState([]);

  const [readingTime, setreadingTime] = useState(0);

  const handleAddToBooksMArk = (blog) => {
    const newBlogs = [...booksMark, blog];
    setbooksMark(newBlogs)
  }

  const handleMarkAsRead = (time, ID) => {
    const newtime = readingTime + time;
    setreadingTime(newtime);

    const remaning = booksMark.filter(bookMark => bookMark.ID !== ID);
    setbooksMark(remaning);
  }


  return (
    <div className=' bg-slate-200' >
      <Header></Header>
      <div className='md:flex  m-14 '>
        <Blogs
          handleAddToBooksMArk={handleAddToBooksMArk}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          booksMark={booksMark}
          time={readingTime}
        ></Bookmarks>
      </div>
      <footer className='bg-black p-6'>
        <h1 className='text-purple-600 text-center'>Shafin21215@gmail.com</h1>
        <p className='text-purple-600 text-center'>Shafin © 2024 All Rights Reserved</p>
      </footer>
    </div>


  )
}

export default App
