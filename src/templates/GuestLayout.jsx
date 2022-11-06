import React, { useContext } from "react";
import Head from "next/head";
import ChurchContext from "~/contexts/churchContext";

export default function GuestLayout({ children }) {
  const { load } = useContext(ChurchContext);

  return (
    <React.Fragment>
      {/* {load === true && <Loading/>} */}
      <Head>
        <title>Administrativo site 3sdigital aplications</title>
      </Head>
      <>{children}</>
    </React.Fragment>
  );
}
