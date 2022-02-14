import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { createProduct, getProduct, updateProduct } from "./service/ProductService";
import * as Yup from "yup"

export const ProductForm =()=>{
    let params= useParams()
    console.log("param",params);
    let navigate = useNavigate();
    const reaedable = params.id?true:false;
    const [loading,setLoading]=useState(false)

    
    useEffect(()=>{
        //use effect mengandung komponen didmount dan didupdate
        if (params.id){
        getDataById()
        }
    },[])

    const formik = useFormik({
        //initialValues sudah disediakan dr formik
        initialValues:{
            id:"",
            name:""
        },
        validationSchema: Yup.object({
            id : Yup.string().required("This field is requred"),
            name : Yup.string().required("This field is ruquired").min(5, "Minimum 5 character")
        }),

        onSubmit:()=>{
            if(params.id){
              handleUpdate()  
            }else{
              handleSubmit()
            }
        }
    })

    const getDataById= async()=>{
        const res = await getProduct(params.id)
        console.log("response get by id",res);
        formik.values.id = res.data.id
        formik.values.name=res.data.name
        formik.setFieldValue()
    }



    const handleSubmit = async()=>{
        try{
            setLoading(true)
            await createProduct(formik.values)
            setLoading(false)
            navigate("/products")
        }catch(error){
            console.error(error);
        }
    }

    const handleUpdate = async()=>{
        try{
            setLoading(true)
            await updateProduct(formik.values)
            setLoading(false)
            navigate("/products")
        }catch(error){
            console.error(error);
        }
    }

    return(
        
        <div>
            {loading?<h1>Loading...</h1>:<div>
                    <h2>Product Form</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group row">
                        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputId" 
                        placeholder="Id"
                        name="id"
                        value={formik.values.id||''}
                        onChange={formik.handleChange}
                        readOnly={reaedable}
                        onBlur={formik.handleBlur}
                        />
                        {formik.errors.id&&formik.touched.id?(
                            <small className="text-danger">{formik.errors.id}</small>
                        ):null}
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputName" 
                        placeholder="Name"
                        name="name"
                        value={formik.values.name||''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.errors.name&&formik.touched.name?(
                            <small className="text-danger">{formik.errors.name}</small>
                        ):null}
                        </div>
                    </div>
                    <br></br>
                        <input className="btn btn-primary" type="submit" value="Submit"/> 
                    </form>
                </div>
                }
            </div>
    )
}