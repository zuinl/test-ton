import React from 'react';
import { render } from '@testing-library/react-native'

import ProductCard from '../index';

describe('<ProductCard />', () => {
  it('should render image component', () => {
    const {
        getByTestId
    } = render(<ProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
         />)

    const imageComponent = getByTestId(/product-image/i)
    
    expect(imageComponent).not.toBeNull();
  });
  it('should render product name', () => {
    const {
        getByText
    } = render(<ProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
         />)

    const nameComponent = getByText(/Produto Teste/i)
    
    expect(nameComponent).not.toBeNull();
  });
  it('should render product price', () => {
    const {
        getByTestId
    } = render(<ProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
         />)

    const priceComponent = getByTestId(/product-price/i)
    
    expect(priceComponent).not.toBeNull();
  });
  it('should render add to cart button', () => {
    const {
        getByTestId
    } = render(<ProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
         />)

    const priceComponent = getByTestId(/add-cart-button/i)
    
    expect(priceComponent).not.toBeNull();
  });
});