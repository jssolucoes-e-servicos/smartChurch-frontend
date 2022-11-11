import React from "react";
import ReactLoading from 'react-loading';
import {
  CadBox,

} from "~/styles/stylesGlobal";

const Loader = () => {
  return (
    <React.Fragment >
      <CadBox>
        <center>
          <ReactLoading type={"spinningBubbles"} color="#00BFFF" height={50} width={50} />
          <span>Processando</span>
        </center>
      </CadBox>
    </React.Fragment>
  );
};

export default Loader;