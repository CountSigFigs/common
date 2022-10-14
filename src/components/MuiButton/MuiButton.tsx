import React from 'react';
import Button, { ButtonProps as MuiButtonProps} from '@mui/material/Button';

type ButtonBaseProps = Pick<MuiButtonProps, 
    "disabled" |
    "variant" |
    "size" | 
    "color" | 
    "children" | 
    "fullWidth"
>;

type ButtonProps = ButtonBaseProps & {
    label: string
};

const MuiButton: React.FC<ButtonProps>= ({ label, ...props }) => (
    <Button {...props}>
        {label}
    </Button>
);

export default MuiButton;
