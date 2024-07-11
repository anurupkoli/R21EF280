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

    const writeData = async(data)=>{
        let resp = await fetch(`${HOST}/api/data/writeData`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                designation: data.designation,
                from: data.from
            })
        })

        let json = await resp.json();
        alert(json.Acknowledgement);
    }
    return(<ProductContext.Provider value={{fetchData, writeData}}>
        {props.children}
    </ProductContext.Provider>)
}

export default ProductState;