import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { CartProvider } from './pages/Cart/CartContext';
import Product from './pages/Product/Product';
import FloatButtonBody from './components/FloatButton/FloatButtonBody';




function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (<Route key={route.path} path={route.path} element={
                <Layout>
                  <FloatButtonBody></FloatButtonBody>
                  <Page />
                </Layout>

              } />
              )
            })}

          </Routes>
        </Router>
      </CartProvider>

    </div>
  );
}

export default App;
