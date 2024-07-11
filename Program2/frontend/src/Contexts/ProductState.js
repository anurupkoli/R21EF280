import ProductContext from "./ProductContext"

const ProductState = (props)=>{
    const HOST = "http://20.244.56.144"
    const fetchData = async()=>{
        const resp = await fetch(`${HOST}/test/companies/AWZ/categories/Phone/products?top=n&minPrice=p&maxPrice=q`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const json = await resp.json();
        console.log(json)
    }
    return(<ProductContext.Provider value={{fetchData}}>
        {props.children}
    </ProductContext.Provider>)
}

export default ProductState;