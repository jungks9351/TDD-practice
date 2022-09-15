import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MoviePage from '../MoviePage';

describe('MoviePage', () => {
  const setup = () => render(<MoviePage />, { wrapper: MemoryRouter });
  it('MoviePage UI Test', () => {
    const { getByText } = setup();

    expect(getByText('MoviePage'));
  });
});
