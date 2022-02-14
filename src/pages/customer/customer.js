import { Outlet, Route, Routes } from "react-router"
import {CustomerList} from "./component/customerList"
import {CustomerForm} from "./component/customerForm"


const Customer=()=>{
    return(
        <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route index element={<CustomerList/>}/>
                <Route path="form" element={<CustomerForm/>}/>
                <Route path=':name' element={<CustomerList/>}/>
            </Route>
        </Routes>
    )
}

export default Customer