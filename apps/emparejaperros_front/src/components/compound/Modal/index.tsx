import React from "react";

type ModalProps = React.PropsWithChildren  & {
    content: string;
}

const Modal = ({children, content}: ModalProps) => {
  return <div> {children} </div>;
};

export default Modal;