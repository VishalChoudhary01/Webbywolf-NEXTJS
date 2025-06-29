import React, { ReactNode } from 'react';

interface ButtonProps {
  buttonText: string;
  buttonStyle?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftStyle?: string;
  rightStyle?: string;
}

function Button({buttonText,buttonStyle = '',leftIcon,rightIcon,leftStyle = '',rightStyle = '',}: ButtonProps) {
  return (
    <button className={buttonStyle}>
      {leftIcon && <span className={leftStyle}>{leftIcon}</span>}
      <span>{buttonText}</span>
      {rightIcon && <span className={rightStyle}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
