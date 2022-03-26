import React from 'react';
import { render, screen, within } from '@testing-library/react';
import PollList from './PollList';

test('should render PollList of 4 options', () => {
  const options = [1,2,3,4]
  render(<PollList options={options} />);

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(4);
});
