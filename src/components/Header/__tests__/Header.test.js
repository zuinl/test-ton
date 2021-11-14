import React from 'react';
import { render } from '@testing-library/react-native'

import Header from '../index';

describe('<Header />', () => {
  it('should render Cart icon box', () => {
    const {
        getByTestId
    } = render(<Header/>)

    const cartIconBox = getByTestId(/cart-icon-box/i)
    
    expect(cartIconBox).not.toBeNull();
  });
  it('should render Go Back icon when navigation.canGoBack() is true', () => {
    const {
        getByTestId
    } = render(<Header
        navigation={
            {
                canGoBack: () => true
            }
        } />)

    const goBackIcon = getByTestId(/go-back-icon/i)
    
    expect(goBackIcon).not.toBeNull();
  });
  it('should NOT render Go Back icon when navigation.canGoBack() is false', () => {
    const {
        queryByTestId
    } = render(<Header
        navigation={
            {
                canGoBack: () => false
            }
        } />)

    const goBackIcon = queryByTestId(/go-back-icon/i)
    
    expect(goBackIcon).toBeNull();
  });
});