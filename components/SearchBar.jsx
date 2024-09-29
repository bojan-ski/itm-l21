'use client'
import { useState } from "react"
// lib - actions
import { getSearchedProduct } from "@/lib/actions"

const SearchBar = () => {
    const [data, setData] = useState([])
    console.log(data);    

    return (
        <div className="search-bar">
            <form action={async(formData) => {
                const data = await getSearchedProduct(formData)
                setData(data);                
            }}>
                <input type="text" name="searchTerm" />
            </form>
        </div>
    )
}

export default SearchBar