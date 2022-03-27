import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './SignUp';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('should render message: Please fill all fields', () => {
  render(<SignUp />, { wrapper: MemoryRouter });

  userEvent.click(screen.getByText(/Sign Up/i), { button: 0 });

  expect(screen.getByText(/Please fill all fields!/i)).toBeInTheDocument();
});

test('should render message: Your password and confirmation password do not match.', () => {
  render(<SignUp />, { wrapper: MemoryRouter });

  const inputUsername = screen.getByLabelText('username');
  fireEvent.change(inputUsername, { target: { value: 'John' } });

  const inputPassword = screen.getByLabelText('password');
  fireEvent.change(inputPassword, { target: { value: '12345' } });

  const inputRePassword = screen.getByLabelText('re-password');
  fireEvent.change(inputRePassword, { target: { value: '12245' } });

  userEvent.click(screen.getByText(/Sign Up/i), { button: 0 });

  expect(
    screen.getByText(/Your password and confirmation password do not match./i)
  ).toBeInTheDocument();
});
