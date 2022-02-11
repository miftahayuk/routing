import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductList = () => {
  const [list, setList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);



  const getProducts = async () => {
    try{
    const response = await axios.get("http://localhost:3002/products");
    console.log("response: ", response);
    setList(response.data.products)
    }catch(error){
          console.log("errorgetProducts: ",error);
    }

  };

  const handleDelete = async(data)=>{
      try{
          if(window.confirm(`Are you sure to delet ${data.name}?`)){
             await axios.delete(`http://localhost:3000/products/${data.id}`)
            await getProducts()}
      }catch(error){
          console.log("error: ", error);
      }
     
}
  
  return (
    <>
      <div>
        
        <h2>Product List</h2>
        <button type="button" className="btn btn-success">Add Product</button>
        <table className="table table-striped"> 
          <thead>
            <tr>
              <th scope="col">#</th> 
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td> 
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                      <button onClick={()=>navigate(`form/${product.id}`)}>Update</button>
                      <button onClick={()=>handleDelete(product)}>Delete</button>
                      </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductList;
