
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import  ProtectedRoute  from '../components/ProtectedRoute'
import  PublicRoute  from '../components/PublicRoute'
import  About  from '../pages/About/About'

import MainLayout from "../components/MainLayout";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/auth" element={<PublicRoute> <Auth /> </PublicRoute>} />
          <Route path="/" element={<MainLayout>  <Home /> </MainLayout> } />
          <Route path="/account" element={<ProtectedRoute> <MainLayout>  <Account /> </MainLayout> </ProtectedRoute>} />
          <Route path="/about" element={<MainLayout>  <About /> </MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
