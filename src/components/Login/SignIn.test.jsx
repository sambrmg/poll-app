import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from './SignIn';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('should render message: Please fill all fields', () => {
  render(<SignIn />, { wrapper: MemoryRouter });

  userEvent.click(screen.getByText(/Sign In/i), { button: 0 });

  expect(screen.getByText(/Please fill all fields!/i)).toBeInTheDocument();
});
