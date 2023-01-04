
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Form from './index';

describe('Form Component', () => {
  test('renders Form as expected', () => {
    render(<Form />);

    // let h1 = screen.getByTestId('header-h1');
    // expect(h1).toHaveTextContent('Hello Tester');
  });
});
