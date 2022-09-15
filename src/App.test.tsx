import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('App', () => {
  render(<App />), { wrapper: BrowserRouter };
});
