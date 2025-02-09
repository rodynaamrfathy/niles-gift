import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'destructive';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold';
  const variantStyles =
    variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white';

  return <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />;
};

export default Button;
