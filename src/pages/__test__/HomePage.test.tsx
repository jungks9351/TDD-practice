import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
  const setup = () => render(<HomePage />, { wrapper: MemoryRouter });
  it('HomePage UI Test', () => {
    const { getByText } = setup();

    expect(getByText('HomePage'));
  });
});
