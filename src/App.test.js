import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const loadMore = screen.getByText("Load More");
  expect(loadMore).toBeInTheDocument();
});
