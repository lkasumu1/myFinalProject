
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';
import LoginForm from './components/SignUp';
import { AuthContextProvider } from './components/context/AuthContext';
import Cabo from './components/pages/cabo';



function App() {
  return (
    <>
    <AuthContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/' element={<Services/>}/>
        <Route path='/' component={<SignIn/>}/>
        <Route path='/' component={<LoginForm/>}/>
        <Route path='/' component={<Cabo/>}/>
        

      </Routes>
      </Router>
      </AuthContextProvider>
      </>
  );
}

export default App;
