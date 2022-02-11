import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export const ProductForm =()=>{
    let params= useParams()
    console.log("param",params);
    const [newData,setNewData]=useState({})

    //addForm
    //bikin onchange di setiap inputan
    //bikin submit ngehit axios method post, update nya put
    //if param nya ada id brrti getdatabyId
    
    useEffect(()=>{
        getDataById()
    },[])

    const getDataById= async()=>{
        console.log("Loading....");
        const res = await axios.get(`http://localhost:3002/products/${params.id}`)
        console.log("response get by id",res);
        setNewData(res.data)
        console.log("Stop....");
    }

    console.log("new data", newData);
    return(
        <div>
            <h2>Product Form</h2>
                <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputId" placeholder="Id"
                value={newData.id || ''}/>
                </div>
            </div>
            <br></br>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName" placeholder="Name"
                value={newData.name ||''}/>
                </div>
            </div>
            <br></br>
            <input className="btn btn-primary" type="submit" value="Submit"/> 
        </div>
    )
}