import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import Home from "./routing/home/home";
// import Customer from "./routing/customer/customer";
// import Product from "./routing/product/product";
// import { ProductForm } from './routing basic/product/component/productForm';
// import { Outlet } from 'react-router';
// import { PageNotFound } from './routing/pageNotFound';
import { PageNotFound } from './routing/shared/pageNotFound';
import Home from "./routing/home/home"
import Customer from "./routing/customer/customer"
import Product from "./routing/product/product"

const App=()=>{

  return(

    <Router>

      {/* Dibawah ini adalah navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        
        <ul>
          <li>
            <Link to="products">Product</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="customers">customer</Link>
          </li>
        </ul>
        

      </nav>


      {/* Dibawah ini adalah konfigurasi */}
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="products/*" element={<Product/>}/>
       
        <Route path="customers/*" element={<Customer/>}/>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>

  )
}

export default App
