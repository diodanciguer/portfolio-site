import { render, screen } from '@testing-library/react';
import Header from '../src/app/components/Header';
import { ThemeContextProvider } from '../src/app/ThemeContext';

describe('Header component', () => {
  it('renders site title', () => {
    render(
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    );
    expect(screen.getByText(/Diego Danciguer/i)).toBeInTheDocument();
  });
});
