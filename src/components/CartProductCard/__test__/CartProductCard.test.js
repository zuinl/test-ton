import React from 'react';
import { render } from '@testing-library/react-native'

import CartProductCard from '../index';

describe('<CartProductCard />', () => {
  it('should render image component', () => {
    const {
        getByTestId
    } = render(<CartProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
        quantity={2}
         />)

    const imageComponent = getByTestId(/product-image/i)
    
    expect(imageComponent).not.toBeNull();
  });
  it('should render name and quantity', () => {
    const {
        getByText
    } = render(<CartProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="BRL"
        quantity={2}
         />)

    const nameComponent = getByText("Produto Teste (2)")
    
    expect(nameComponent).not.toBeNull();
  });
  it('should render price', () => {
    const {
        getByTestId
    } = render(<CartProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="USD"
        quantity={1}
         />)

    const priceComponent = getByTestId(/product-price/)
    
    expect(priceComponent).not.toBeNull();
  });
  it('should render remove from cart icon', () => {
    const {
        getByTestId
    } = render(<CartProductCard 
        name="Produto Teste"
        id={1}
        price={9.99}
        currency="USD"
        quantity={1}
         />)

    const removeIcon = getByTestId(/remove-icon/)
    
    expect(removeIcon).not.toBeNull();
  });
});