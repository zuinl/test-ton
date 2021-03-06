import React, { createContext, useContext, useState } from 'react'
import CartProductProps from '../interfaces/CartProduct'

interface CartContextProps {
    children: any
}

const CartContext = createContext({
  IDsList: [] as Array<number>,
  products: [] as Array<any>,
  addProduct: (product: CartProductProps) => { },
  removeProduct: (productID: number) => { },
  clearCart: () => { }
});

export const CartContextProvider = (props: CartContextProps) => {
  const [IDsList, setIDsList] = useState([] as Array<number>);
  const [products, setProducts] = useState([] as Array<any>);

  const addProduct = (product: CartProductProps) => {
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

  const clearCart = () => {
    setProducts([])
    setIDsList([])
  }

  return (
    <CartContext.Provider
      value={{
        IDsList,
        products,
        addProduct,
        removeProduct,
        clearCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
}