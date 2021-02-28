import { render } from '@testing-library/react';
import React from 'react';
import Input from '../../components/Input';

jest.mock('react-router-dom', () => {
    return {
        useHistory: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})

describe('Input app', () => {
    it('Find components', () => {
        const { debug } = render(<Input name="date"/>)
        debug();
    })
})