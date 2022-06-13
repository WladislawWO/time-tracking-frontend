import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

const ModalContext = createContext({});

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [open, setOpen] = useState(null);
  const [data, setData] = useState(null);

  const onOpen = (name, values) => {
    setOpen(name);
    setData(values);
  };

  const onClose = () => {
    setOpen(null);
    setData(null);
  };

  const value = useMemo(() => ({
    open,
    data,
    onOpen,
    onClose,
  }), [open, data, onOpen, onClose]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalProvider;
