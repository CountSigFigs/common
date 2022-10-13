import React from 'react';
import Button, { ButtonProps as MuiButtonProps} from '@mui/material/Button';

const MuiButton: React.FC<MuiButtonProps>= ({ children, ...props }) => (
    <Button {...props}>
        {children}
    </Button>
);

export default MuiButton;
