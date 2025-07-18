import React from 'react'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import "./App.css"

const App = () => {
  return (
   <>
   <HeaderComponent/>
  <ListEmployeeComponents/>
  <FooterComponent/>

   </>
  )
}

export default App
