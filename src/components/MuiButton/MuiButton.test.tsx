import React from 'react';
import { render } from '@testing-library/react';

import Button from './MuiButton';

describe('Button', () => {
    test("renders the button component", () => {
        render(<Button label='hello'/>)
    })
})