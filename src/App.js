import React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';
import { Contact } from './pages/Contact';
import { Expertise } from './pages/Expertise';
import { Layout } from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: "/expertise",
    element: <Expertise />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
