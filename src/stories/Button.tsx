import React, { FC } from 'react';

import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  // eslint-disable-next-line react/require-default-props
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export const Button: FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, label, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
