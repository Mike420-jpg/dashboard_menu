import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

declare const test: (name: string, callback: () => void) => void;

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  if (!baseElement) {
    throw new Error('App failed to render');
  }
});
