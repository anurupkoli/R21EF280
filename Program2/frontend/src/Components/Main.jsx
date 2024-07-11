import React, { useContext, useEffect } from 'react'
import ProductContext from '../Contexts/ProductContext'


export default function Main() {
  const productContext = useContext(ProductContext);
  const {fetchData}  = productContext;
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div>Main</div>
  )
}
