// imports
import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react'

import { Button } from 'common/components';

// constants
const onClick = jest.fn();

// tests
describe('Button', () => {
    it('Shows the button text', () => {
        render(<Button text="Click"/>);
        expect(screen.getByText('Click')).toBeInTheDocument();
      });

      it('Calls the onClick function when clicked', () => {
        const button = render(<Button id="button" text="Click" onClick={onClick} />);
        const {getByTestId} = button;
        fireEvent.click(getByTestId('button'))
        expect(onClick).toBeCalled();
      });
})

