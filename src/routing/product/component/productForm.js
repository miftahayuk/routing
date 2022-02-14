import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { createProduct, getProduct, updateProduct } from "./service/ProductService";

export const ProductForm =()=>{
    let params= useParams()
    console.log("param",params);
    const [newData,setNewData]=useState({id:"",name:""})
    let navigate = useNavigate();
    const [loading,setLoading]=useState(false)

    //addForm
    //bikin onchange di setiap inputan
    //bikin submit ngehit axios method post, update nya put
    //if param nya ada id brrti getdatabyId
    
    useEffect(()=>{
        //use effect mengandung komponen didmount dan didupdate
        if (params.id !== undefined){
        getDataById()
        }
    },[])

    const getDataById= async()=>{
        console.log("Loading....");
        const res = await getProduct(params.id)
        console.log("response get by id",res);
        setNewData(res.data)
        console.log("Stop....");
    }


    const handleOnChangeId=(e)=>{
        setNewData({...newData,id:e.target.value})
    }

    const handleOnChangeName=(e)=>{
         setNewData({...newData,name:e.target.value})
         console.log("newdata",newData);
    }

    // const postData = async()=>{
    //     try{
    //         const res = await axios.post("http://localhost:3000/products",newData);
    //         console.log("response post: ", res);
    //         // setNewData(...newData,res.data)
    //     }catch(error){
    //         console.log("error",error);
    //     }
    // }

    // const updateData = async()=>{
    //     try{
    //         const res = await axios.put("http://localhost:3000/products",newData);
    //         console.log("response put: ", res);
    //     }catch(error){
    //         console.log("error",error);
    //     }
    // }

    // const handleSubmit = async (e)=>{
    //     setLoading(true)
    //     await postData()
    //     setLoading(false)
    //     e.preventDefault()
    //     navigate("/products")
    // }

    // const handleUpdate= async (e)=>{
    //     setLoading(true)
    //     await updateData()
    //     setLoading(false)
    //     e.preventDefault()
    //     navigate("/products")
    // }

    const handleSubmit = async(event)=>{
        try{
            setLoading(true)
            await createProduct(newData)
            setLoading(false)
            navigate("/products")
        }catch(error){
            console.error(error);
        }
        event.preventDefault()
    }

    const handleUpdate = async(event)=>{
        try{
            setLoading(true)
            await updateProduct(newData)
            setLoading(false)
            navigate("/products")
        }catch(error){
            console.error(error);
        }
        event.preventDefault()
    }

    console.log("new data", newData);
    return(
        
        <div>
            {loading?<h1>Loading...</h1>:
                        <form>
                <div className="form-group">
                    <h2>Product Form</h2>
                        <div className="form-group row">
                        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputId" 
                        placeholder="Id"
                        value={newData.id||''}
                        onChange={handleOnChangeId}/>
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
                        value={newData.name||''}
                        onChange={handleOnChangeName}/>
                        </div>
                    </div>
                    <br></br>
                    
                    
                    {params.id === undefined ? (
                        <input className="btn btn-primary" type="submit" value="Submit" onClick={handleSubmit}/> 
                    ) : (
                        <input className="btn btn-secondary" type="submit" value="Update" onClick={handleUpdate}/> 
                    )}
                </div>
                </form>}

        </div>
    )
}