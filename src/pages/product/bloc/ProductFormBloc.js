// import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createProduct, getProduct, updateProduct } from "../component/service/ProductService";

const ProductFormBloc=()=>{
    let params= useParams()
    const reaedable = params.id?true:false;
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false)



    const getProductById= async()=>{
        try{
            const res= await getProduct(params.id)
            return res
        }catch(error){
            console.log(error);
        }
    }



    const handleSubmit = async(values)=>{
        try{
            setLoading(true)
            let res = await createProduct(values)
            setLoading(false)
            console.log(res);
            console.log(res.data);
            navigate("/products")
        }catch(error){
            console.error(error);
        }
    }

    const handleUpdate = async(values)=>{
        try{
            setLoading(true)
            await updateProduct(values)
            setLoading(false)
            navigate("/products")
        }catch(error){
            console.error(error);
        }
    }

    return{
        params,
        reaedable,
        getProductById,
        handleSubmit,
        handleUpdate,
        loading
    }

}

export default ProductFormBloc