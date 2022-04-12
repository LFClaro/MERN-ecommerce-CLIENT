import React, { useState } from 'react';
import './App.css';

//Import Component pages
import Header from './Components/Header';
import Footer from './Components/Footer';

// Import Page pages
import Main from './Pages/Main';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
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
import CommunityReply from './Pages/CommunityReply';
import CommunityRep from './Pages/CommunityRep';
import Profile from './Pages/Profile';
import {Item} from './Pages/Item';
import AddItem from './Pages/AddItem';
import ItemList from './Pages/ItemList';
import ItemListUser from './Pages/ItemListUser';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

// Import Admin pages
import AdminMain from './Admin/AdminMain';
import AdminUsers from './Admin/AdminUsers';
import AdminProducts from './Admin/AdminProducts';
import FooterAdm from './Admin/FooterAdm';
import HeaderAdm from './Admin/HeaderAdm';
import AdminContext from './Context/AdminContext';
import EditRole from './Admin/EditRole';
import AddUser from './Admin/AddUser';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';


function App() {
  const [authorized, setAuthorized] = useState(true); //default value false, set to true for testing purpose
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  //This function is used to redirect user to admin panel
  const adminLogInFun = () => {
    setIsAdminLogged(true);
  }
  let redirectAppRoutes;
  let { id } = useParams();

  let id_user;

  if (isAdminLogged) {
    redirectAppRoutes = (     
        <BrowserRouter>
          <HeaderAdm />
          <Routes>
            <Route path='/' element={<AdminMain />} />
            <Route path='users' element={<AdminUsers />} />
            <Route path='products' element={<AdminProducts />} />
            <Route path='users/edit' element={<EditRole />} />
            <Route path='users/add' element={<AddUser />} />
          </Routes>
          <FooterAdm />
        </BrowserRouter>
    );
  } else {
    redirectAppRoutes = (
      <BrowserRouter>
        <Header authorized={authorized} setAuthorized={setAuthorized} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq' element={<Faq />} />
          <Route path='messages' element={<Messages />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='services' element={<Services />} />
          <Route path='team' element={<Team />} />
          <Route path='terms' element={<Terms />} />
          <Route path='profile' element={<Profile />} />
          <Route path='community' element={<Community />} />
          <Route path='communityReply' element={<CommunityReply />} />
          <Route path='communityRep/:id' element={<CommunityRep />} />
          <Route path='item/:id' element={<Item />} />
          <Route path='addItem' element={<AddItem />} />
          <Route path='signup' element={<SignUp setAuthorized={setAuthorized} />} />
          <Route path='login' element={<Login setAuthorized={setAuthorized} />} />
          <Route path='products' element={<ItemList />} />
          <Route path='yourProducts' element={<ItemListUser />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  return (
    <>
    <AdminContext.Provider value={{ adminLogInFun: adminLogInFun, id, id_user}} >
      {redirectAppRoutes}
    </AdminContext.Provider>
     
    </>
    
  );
}

export default App;
