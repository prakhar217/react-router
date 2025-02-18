import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import {} from 'react-router'
import RootLayout from './rootLayout/RootLayout';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';

function App() {


  //this is a new way to routing 
  // route path / will contain component we want on all pages , and every subsequent route inside will relative path
  // ie / + product 
  // so whene ever we are on / we will see Rootlayout and when we arw at /product we will see 
   // Rootlayyout + product component

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index  element={<Home />}/>
        <Route path='product'  element={<Product />}/>
        <Route path='about'  Component={About}/>
        <Route path='contacts'  Component={Contact}/>
      </Route>
    )
  ) 

  return (
    <div className="App">
      <RouterProvider  router = {router}  />
    </div>
  );
}

export default App;
