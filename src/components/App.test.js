import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { getByRole } = render(<App />);

    const logo = getByRole('img', { alt: /logo/i });
    expect(logo).toBeTruthy();
    expect(logo).toHaveAttribute('src', '/qantas-logo.png');
  });
});
