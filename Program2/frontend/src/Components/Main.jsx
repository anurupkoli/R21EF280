import React, { useContext, useEffect } from 'react'
import ProductContext from '../Contexts/ProductContext'



export default function Main() {
  const productContext = useContext(ProductContext);
  const {fetchData}  = productContext;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>Main</div>
  )
}
