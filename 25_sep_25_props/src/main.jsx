import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Component/Pages/login'
import Register from './Component/Pages/Register'
import Error404 from './Component/Pages/Error404'





createRoot(document.getElementById('root')).render(
    <>
        {/* <Home/>
  <About/> */}

        <BrowserRouter>
            <Routes>
                {/* Home page path  /https:localhos.123*/}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </>


)
