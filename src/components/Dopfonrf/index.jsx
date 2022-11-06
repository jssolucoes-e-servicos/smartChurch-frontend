import React from "react";
import { Drop3sdMaster } from "src/styles/stylesGlobal";
import { ContainerTitle } from "./styles";
export default function DropsMaster({ children, id = id, onClose = () => {} }) {
  return (
    <Drop3sdMaster id={id} onMouseLeave={onClose}>
      <ContainerTitle>Action 2{id}</ContainerTitle>
      {children}
    </Drop3sdMaster>
  );
}
