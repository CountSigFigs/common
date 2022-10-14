import React from 'react';
import MuiButton from '../MuiButton';
import { ButtonProps as MuiButtonProps} from '@mui/material';

type ButtonBaseProps = Pick<MuiButtonProps, 
    "disabled" |
    "size" | 
    "color" | 
    "children" | 
    "fullWidth"
>;

type ButtonProps = ButtonBaseProps & {
    label: string
};
const OutlinedButton: React.FC<ButtonProps> = ({ label }) => (
   <MuiButton label={label} variant='outlined' />
);

export default OutlinedButton;
