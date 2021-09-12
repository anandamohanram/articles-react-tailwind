// imports
import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react'

import { Card } from 'common/components';

import * as UtilsModule from '../utils'; 

// constants
const onClick = jest.fn();
jest.mock('../utils');

// tests
describe('Card', () => {
    
    it('Shows the card contents', () => {
        render(<Card date="date" heading="heading" content="content" readMoreLink="link" />);
        expect(screen.getByText('date')).toBeInTheDocument();
        expect(screen.getByText('content')).toBeInTheDocument();
        expect(screen.getByText('heading')).toBeInTheDocument();
        expect(screen.getByText('Read More')).toBeInTheDocument();
      });

      it('Calls the getOnClickHandler function when clicked', () => {
        const card = render(<Card id="button" text="Click" onClick={onClick} />);
        const {getByTestId} = card;
        fireEvent.click(getByTestId('button'))
        expect(UtilsModule.getOnClickHandler).toBeCalled();
      });
})

