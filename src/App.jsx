import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepages from './pages/Homepages'
import Login from './pages/Login'

import Courses from './pages/Courses'

import Signup from './pages/Signup'
import Layout  from './components/Layout'
import'animate.css';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}> 
    <Route path='/home' element={<Homepages />}/>
   
    <Route path='/courses' element={<Courses />}/>

    </Route>
     <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
   
   </Routes> 
   </BrowserRouter>
  )
}

export default App
