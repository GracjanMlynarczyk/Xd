import { RefObject } from 'react';

const closeOnClickOutside = (refItem: RefObject<HTMLDivElement>, isVisible: boolean, close: () => void): void => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (refItem.current && !refItem.current.contains(event.target as Node)) {
      document.removeEventListener('mousedown', handleClickOutside);
      close();
    }
  };

  if (isVisible) {
    document.addEventListener('mousedown', handleClickOutside);
  }
};

export default closeOnClickOutside;
