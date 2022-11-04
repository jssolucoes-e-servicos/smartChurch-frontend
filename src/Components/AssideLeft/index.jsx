import React from "react";
import Sidebar from "src/Components/Sidebar";

import { ContainerAssid } from "./styles";

export default function AsideLeft({ }) {
  return (
    <React.Fragment>
      <ContainerAssid id="navegMan">
        <Sidebar />
      </ContainerAssid>
    </React.Fragment>
  );
}