import client from "../../../../shared/http-client/Client"

export const getProducts=async(params)=>{
    const response =  await client.get("/products", {params})
    return response
}

export const getProduct = async (id)=>{
    const response = await client.get(`/products/${id}`)
    return response
}

export const createProduct= async(product)=>{
    const response = await client.post(`/products`,product)
    return response
}

export const updateProduct=async (product)=>{
    const response = await client.put(`/products`,product)
    return response
}

export const deleteProduct=async(id)=>{
    const response = await client.delete(`/products/${id}`)
    return response
}