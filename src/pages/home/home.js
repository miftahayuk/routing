import { useNavigate } from "react-router"

const Home=()=>{
  //Programmatically navigation
  let navigate=useNavigate()
  return(
    <>
    <h2>Home</h2>
    <button onClick={()=>navigate("/customers/")}>CUSTOMERS</button>
    </>
  )
}

export default Home