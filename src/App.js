import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./routing basic/home/home";
import Customer from "./routing basic/customer/customer";
import Product from "./routing basic/product/product";
import { ProductForm } from './routing basic/product/productForm';
import { Outlet } from 'react-router';
import { CustomerForm } from './routing basic/customer/customerForm';
import { PageNotFound } from './routing basic/pageNotFound';


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
        <Route path="products" element={<Outlet/>}>
          <Route index element={<Product/>}/>
          <Route path="form" element={<ProductForm/>}/>
        </Route>
        <Route path="customers" element={<Outlet/>}>
          <Route index element={<Customer/>}/>
          <Route path="form" element={<CustomerForm/>}/>
          {/* dua di bawah ini sama aja, baris pertama tuh kek ngereplace, mending kek yang brs dua aja */}
          {/* <Route path='/customers/:name' element={<Customer/>}></Route> */}
          <Route path=':name' element={<Customer/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>

  )
}

export default App
