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
import { Item } from './Pages/Item';
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
  const [authorized, setAuthorized] = useState(true); 
// if token exist 
  // set usestae to true 
// else 
  // set toke to false 
  // let token = localStorage.getItem("token");
  // if(!token){
  //   setAuthorized(false);
  // }
  



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
          <Route path={process.env.PUBLIC_URL} element={<Main />} />
          <Route path={process.env.PUBLIC_URL + '/about'} element={<About />} />
          <Route path={process.env.PUBLIC_URL + '/blog'} element={<Blog />} />
          <Route path={process.env.PUBLIC_URL + '/cart'} element={<Cart />} />
          <Route path={process.env.PUBLIC_URL + '/checkout' } element={<Checkout />} />
          <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact />} />
          <Route path={process.env.PUBLIC_URL + '/faq'} element={<Faq />} />
          <Route path={process.env.PUBLIC_URL + '/messages'} element={<Messages />} />
          <Route path={process.env.PUBLIC_URL + '/schedule'} element={<Schedule />} />
          <Route path={process.env.PUBLIC_URL + '/services'} element={<Services />} />
          <Route path={process.env.PUBLIC_URL + '/team'} element={<Team />} />
          <Route path={process.env.PUBLIC_URL + '/terms'} element={<Terms />} />
          <Route path={process.env.PUBLIC_URL + '/profile'} element={<Profile />} />
          <Route path={process.env.PUBLIC_URL + '/community'} element={<Community />} />
          <Route path={process.env.PUBLIC_URL + '/communityReply'} element={<CommunityReply />} />
          <Route path={process.env.PUBLIC_URL + '/communityRep/:id'} element={<CommunityRep />} />
          <Route path={process.env.PUBLIC_URL + '/item/:id'} element={<Item />} />
          <Route path={process.env.PUBLIC_URL + '/addItem'} element={<AddItem />} />
          <Route path={process.env.PUBLIC_URL + '/signup'} element={<SignUp setAuthorized={setAuthorized} />} />
          <Route path={process.env.PUBLIC_URL + '/login'} element={<Login setAuthorized={setAuthorized} adminLogInFun={adminLogInFun} />} />
          <Route path={process.env.PUBLIC_URL + '/products'} element={<ItemList />} />
          <Route path={process.env.PUBLIC_URL + '/yourProducts'} element={<ItemListUser />} />
          <Route path={process.env.PUBLIC_URL + '/signup'} element={<SignUp />} />
          <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
          <Route path={process.env.PUBLIC_URL + '/privacy'} element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  return (
    <>
      <AdminContext.Provider value={{ adminLogInFun: adminLogInFun, id, id_user }} >
        {redirectAppRoutes}
      </AdminContext.Provider>

    </>

  );
}

export default App;
