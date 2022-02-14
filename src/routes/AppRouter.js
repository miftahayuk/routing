import { Outlet, Route, Routes } from "react-router"
import Customer from "../pages/customer/customer"
import Home from "../pages/home/home"
import ProductFormBloc from "../pages/product/bloc/ProductFormBloc"
import ProductListBloc from "../pages/product/bloc/ProductListBloc"
import { ProductForm } from "../pages/product/component/productForm"
import ProductList from "../pages/product/component/productList"
import { PageNotFound } from "../shared/pageNotFound"


const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Outlet/>}>
        <Route index element={<ProductList bloc={() => ProductListBloc()} />} />
        <Route path="form" element={<ProductForm bloc={() => ProductFormBloc()}/>} />
        <Route path="form/:id" element={<ProductForm bloc={() => ProductFormBloc()}/>} />
      </Route>
      <Route path="customers/*" element={<Customer/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouters