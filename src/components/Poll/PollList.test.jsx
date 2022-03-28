import React from 'react';
import { render, screen, within } from '@testing-library/react';
import PollList from './PollList';

test('should render PollList of 2 options', () => {
  const options = [{ id: 1, title: 'One' }, { id: 2, title: 'Two' }];
  render(<PollList options={options} />);

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(2);
});
