import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CurrencyTextInputComponent from '../TextInputComponent';
describe('Image with loader tests', () => {
  it('renders correcly', async () => {
    const {toJSON, getByTestId} = render(
      <CurrencyTextInputComponent value="" onValueChange={() => {}}></CurrencyTextInputComponent>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
