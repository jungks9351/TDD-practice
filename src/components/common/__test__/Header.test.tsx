import { createMemoryHistory } from '@remix-run/router';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  const setup = () => {
    return render(<Header />, { wrapper: MemoryRouter });
  };

  it('Header UI Test', () => {
    const { getByRole } = setup();

    expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Movie' })).toBeInTheDocument();
  });

  it('Header Routing Page Test', () => {
    const { getByRole } = setup();
    const history = createMemoryHistory();

    const HomeLink = getByRole('link', { name: 'Home' });
    fireEvent.click(HomeLink);
    history.push('/');
    expect(history.location.pathname).toBe('/');

    const MovieLink = getByRole('link', { name: 'Movie' });
    fireEvent.click(MovieLink);
    history.push('/movie');
    expect(history.location.pathname).toBe('/movie');
  });
});
