import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Routes, Route } from "react-router-dom";
import Notfound from './pages/Notfound'
import Courses from './pages/Courses'
import Men from './pages/Men'
import Women from './pages/Women'
import CourseDetail from './pages/CourseDetail'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men />}/>
          <Route path='women' element={<Women />}/>
        </Route>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:courseId' element={<CourseDetail />} />

        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App