import React from 'react'
import { Navbar } from './components'
import Switch from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>

     <Navbar/>

     <BrowserRouter>
      <Switch />
    </BrowserRouter>
    </>
  )
}
