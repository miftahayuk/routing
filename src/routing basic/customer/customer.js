import { useNavigate, useParams } from "react-router"

const Customer=()=>{
    let params = useParams();
    //params masih bentuknya object, jd dipanggilnya params.name
    let navigate = useNavigate()
    console.log(params);
    return(
        <>
        <h2>Customer : {params.name}</h2>
        {/* dibawah ini bisa ke form product */}
        {/* <button onClick={()=>navigate("/products/form")}>Add Product</button> */}
        <button onClick={()=>navigate("/customers/form")}>Add Product</button>
        </>
    )
}

export default Customer