import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import UserForm from './UserForm';

describe('<UserForm />', () => {
  it('submits the form', async () => {
    const { getByText, findByTestId } = render(<UserForm type={'Register'} />);
    fireEvent.click(getByText('Register'));
  });
});
