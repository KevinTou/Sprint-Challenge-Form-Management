import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import UserForm from './UserForm';

describe('<UserForm />', () => {
  it('submits the form', async () => {
    // const userForm = render(<UserForm type={'Register'} />);
    // console.log(userForm.debug());
    const { getByText, findByTestId } = render(<UserForm type={'Register'} />);

    const username = await findByTestId('username');
    const password = await findByTestId('password');

    fireEvent.click(getByText('Register'));

    // Successful submission resets back to ''
    expect(username.value).toBe('');
    expect(password.value).toBe('');
  });
});
