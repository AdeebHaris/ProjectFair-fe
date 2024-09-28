import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Project from './pages/Project'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={'register'}/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    <Footer/>
    <ToastContainer />

    </>
  )
}

export default App
