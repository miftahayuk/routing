import { useState } from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";
import { deleteProduct, getProduct, getProducts } from "../component/service/ProductService";

const ProductListBloc=()=>{
    const [list, setList] = useState([]);
    let navigate = useNavigate();


    const getListProduct = async () => {
        try{
        const response = await getProducts();
        console.log("response get product: ", response);
        setList(response.data.products)
        }catch(error){
            console.log("errorgetProducts: ",error);
        }

  };

  const handleDelete = async(data)=>{
      try{
          if(window.confirm(`Are you sure to delete ${data.name}?`)){
            await deleteProduct(data.id)
            await getProduct()}
      }catch(error){
          console.log("error: ", error);
      } 
  }

  return{
      list,
      getListProduct,
      handleDelete,
      navigate
  }

}

export default ProductListBloc