import React from "react";
import { Drop3sdMaster } from "src/styles/stylesGlobal";
import { ContainerTitle } from "./styles";
export default function DropsMaster({ children, id = id, onClose = () => {} }) {
  const HandleOutsideClick = (e) => {
    e.target.id === id && onClose();
  };
  return (
    <Drop3sdMaster id={id} onMouseLeave={onClose}>
      <ContainerTitle>Action {id}</ContainerTitle>
      {children}
    </Drop3sdMaster>
  );
}
