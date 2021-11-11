import React, { createContext, useContext, useState } from 'react';
import ProductProps from '../interfaces/Product'

interface CartContextProps {
    children: any
}

const CartContext = createContext({
  IDsList: [] as Array<number>,
  products: [] as Array<any>,
  addProduct: (product: ProductProps) => { },
  removeProduct: (productID: number) => { }
});

export const CartContextProvider = (props: CartContextProps) => {
  const [IDsList, setIDsList] = useState([] as Array<number>);
  const [products, setProducts] = useState([] as Array<any>);

  const addProduct = (product: ProductProps) => {
    if(IDsList.includes(product.id)) return

    let updatedProducts = [
        ...products,
        { ...product }
    ]

    let updatedIDsList = [
        ...IDsList,
        product.id
    ]

    setProducts(updatedProducts)
    setIDsList(updatedIDsList)
  }

  const removeProduct = (productID: number) => {
      if(!IDsList.includes(productID)) return

      let updatedProducts = products.filter(item => {
          return item.id !== productID
      })

      let updatedIDsList = IDsList.filter(ID => {
          return ID !== productID
      })

      setProducts(updatedProducts)
      setIDsList(updatedIDsList)
  }

  return (
    <CartContext.Provider
      value={{
        IDsList,
        products,
        addProduct,
        removeProduct
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
}