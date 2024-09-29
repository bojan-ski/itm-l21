"use server"
import axios from "axios";

export const getSearchedProduct = async (formData) => {
    // console.log(formData);    

    if(!formData) return    

    const searchTerm = formData?.get('searchTerm')

    const response = await axios(`${process.env.API_URL}/search?q=${searchTerm}`)

    console.log(response.data.products);    
    return response.data.products
}