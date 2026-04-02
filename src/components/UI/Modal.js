import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open }) => {
  const ref = useRef();

  useEffect(() => {
    if (open) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }

    return () => ref.current?.close(); // cleanup
  }, [open]);

  return createPortal(
    <dialog className="modal cart" ref={ref}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;