'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && 'bg-orange-700 p-2 text-white',
          'bg-purple-700 px-2 text-white rounded-lg'
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
