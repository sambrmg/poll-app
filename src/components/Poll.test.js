import { render } from '@testing-library/react';
import Poll from './Poll';

test('should show login form', () => {
  render(<Poll />);
});

test('sum', () => {
  expect(1 + 1).toBe(2);
});
