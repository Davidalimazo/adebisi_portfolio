import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Layout from './components/Layout';
import MyWork from './components/MyWork';
import Posts from './components/Posts';



export default function App() {

  return (
    <AnimatePresence>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='my_work' element={<MyWork/>}/>
      <Route path='posts' element={<Posts/>}/>
    </Routes>
    </AnimatePresence>
  )
}
