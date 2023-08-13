import { useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return [isOpen, toggleModal];
};

export default useModal;
