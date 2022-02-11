import { Outlet, Route, Routes} from "react-router"
import { ProductForm } from "./component/productForm";
import ProductList from "./component/productList";

const Product=()=>{
    // let navigate= useNavigate();
    return(
            <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route index element={<ProductList/>}/>
                <Route path="form" element={<ProductForm/>}/>
                <Route path=':name' element={<ProductList/>}/>
                <Route path="form/:id" element={<ProductForm/>}/>
            </Route>
        </Routes>
  )
}
export default Product