import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'disabled';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a' | 'link';
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  title?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'bg-white text-purple-600 hover:bg-purple-50',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600',
  ghost: 'text-purple-600 hover:bg-purple-50',
  disabled: 'bg-purple-400 text-white cursor-not-allowed opacity-50',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  to,
  type = 'button',
  onClick,
  title,
  ...props
}: ButtonBaseProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2';
  const widthStyle = fullWidth ? 'w-full' : '';
  const buttonVariant = disabled ? 'disabled' : variant;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  const commonProps = {
    className: `${baseStyles} ${variantStyles[buttonVariant]} ${sizeStyles[size]} ${widthStyle} ${className}`,
    disabled: disabled || buttonVariant === 'disabled',
    onClick,
    title,
    ...props,
  };

  if (as === 'a' && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {content}
      </a>
    );
  }

  if (as === 'link' && to) {
    return (
      <Link to={to} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {content}
    </button>
  );
};
