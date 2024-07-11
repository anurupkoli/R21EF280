import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const HOST = "http://20.244.56.144";
  const fetchData = async () => {
    const resp = await fetch(
      `${HOST}/test/companies/AWZ/categories/Phone/products`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
      }
    );

    if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }

    const json = await resp.json();
    console.log(json);
  };
  return (
    <ProductContext.Provider value={{ fetchData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
