import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/editproduct/:id' element={<EditProduct/>}/>
        <Route path='/:id' element={<ProductPage/>}/>
    </Routes>
  )
}

export default MainRoutes