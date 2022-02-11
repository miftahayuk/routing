import { useNavigate } from "react-router"

const Product=()=>{
    let navigate= useNavigate();
  return(
    <>
    <h2>Product</h2>
    <button onClick={()=>navigate("form")}>Add Product</button>
    </>
  )
}
export default Product