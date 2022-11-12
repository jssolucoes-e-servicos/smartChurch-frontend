import React, { Fragment, useContext } from "react";
import Head from "next/head";
import ChurchContext from "~/contexts/churchContext";
import Loader from "~/components/Loader/index";
import {
  Bglogin, ContainerData, ContainerImgs, ContainerLogin
} from "~/styles/pages/logis";


export default function GuestLayout({ children }) {
  const { load } = useContext(ChurchContext);

  return (
    <Fragment>
      <Head>
        <title>smartChurch | Acesso</title>
      </Head>
      <Fragment>
        <ContainerLogin>
          <ContainerImgs>
            <Bglogin src="/assets/img/logo.png" />
          </ContainerImgs>
          <ContainerData>
            {load === true ? <Loader /> : children}
          </ContainerData>
        </ContainerLogin>
      </Fragment>
    </Fragment>
  );
}
