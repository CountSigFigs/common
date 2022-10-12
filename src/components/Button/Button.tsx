import React from 'react';

export interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
    <button>{label}</button>
);

export default Button;
