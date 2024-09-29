import axios from "axios";

const getProductData = async (id) => {
    let response

    try {
        if (id == undefined) {
            response = await axios(`${process.env.API_URL}?limit=9`)
        } else {
            response = await axios(`${process.env.API_URL}/${id}`)
        }    

        return response.data        
    } catch (error) {
        console.log(error);

        return false
    }    
}

export default getProductData