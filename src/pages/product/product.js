import {useNavigate } from "react-router"

export const Product = () => {
    let navigate = useNavigate()
    return (
        <>
        <h2>Product</h2>
        <button onClick={() => navigate("form")}>Add product</button>
        </>
    )
}
export default Product