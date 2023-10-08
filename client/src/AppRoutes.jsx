import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './Pages/Home'
import { ViewBlog } from './Pages/ViewBlog'
import {PostBlog} from './Pages/PostBlog'
import { Auth } from './Pages/Auth'

export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs/:id' element={<ViewBlog/>}/>
            <Route path='/add-blog' element={<PostBlog/>}/>
            <Route path='/auth' element={<Auth/>}/>
        </Routes>
    </div>
  )
}
