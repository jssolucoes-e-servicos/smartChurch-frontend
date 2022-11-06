import React from "react";
import Sidebar from "~/partials/Sidebar";

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