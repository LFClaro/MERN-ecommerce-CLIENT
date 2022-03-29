import React, { useState } from 'react';
import './App.css';

//Import Component pages
import Header from './Components/Header';
import Footer from './Components/Footer';

// Import Page pages
import Main from './Pages/Main';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Messages from './Pages/Messages';
import Schedule from './Pages/Schedule';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Terms from './Pages/Terms';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Community from './Pages/Community';
import Profile from './Pages/Profile';
import AddItem from './Pages/AddItem';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

// Import Admin pages
import AdminMain from './Admin/AdminMain';
import AdminUsers from './Admin/AdminUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './Pages/ItemList';


function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <BrowserRouter>
      <Header authorized={authorized} setAuthorized={setAuthorized} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
        <Route path='messages' element={<Messages />} />
        <Route path='schedule' element={<Schedule />} />
        <Route path='services' element={<Services />} />
        <Route path='team' element={<Team />} />
        <Route path='terms' element={<Terms />} />
        <Route path='admin' element={<AdminMain />} />
        <Route path='users' element={<AdminUsers />} />  
        <Route path='profile' element={<Profile />} />
        <Route path='community' element={<Community />} />
        <Route path='addItem' element={<AddItem />} />
        <Route path='signup' element={<SignUp setAuthorized={setAuthorized} />} />
        <Route path='login' element={<Login setAuthorized={setAuthorized} />} />
        <Route path='products' element={<ItemList />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
