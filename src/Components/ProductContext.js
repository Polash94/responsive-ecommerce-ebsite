const { createContext, useState, useEffect } = require("react");

const ProductContext = createContext();

export function ProductProvider ({children}){

//State for product
const [product,setProduct] = useState([])

//Fetching Product From Api

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=>setProduct(data))
   },[])

  




    return(
        <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
    )


}

export default ProductContext;