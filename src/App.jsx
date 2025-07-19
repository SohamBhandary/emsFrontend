import React from 'react'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import "./App.css"
import {BrowserRouter,Routes,Route  } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

const App = () => {
  return (
   <>
   <BrowserRouter>
    <HeaderComponent/>
     <Routes>
      <Route path='/' element={<ListEmployeeComponents />} />
      <Route path='/employees' element={<ListEmployeeComponents />} />
      <Route path='/add-employee' element={<EmployeeComponent />} />
     </Routes>
  
  <FooterComponent/>
  </BrowserRouter>
  

   </>
  )
}

export default App
