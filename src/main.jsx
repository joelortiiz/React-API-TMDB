import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import Home from './components/Home'
import FilmDetail from './components/FilmDetail'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
      <Route path='/films/:id' element={<FilmDetail/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>


    </Routes>

  </BrowserRouter>
)
