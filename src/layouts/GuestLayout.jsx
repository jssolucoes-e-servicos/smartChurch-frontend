import React, { useContext } from "react";
import Head from "next/head";
import DataContext from "~/contexts/dataContext";

export default function GuestLayout({ children }) {
  const { load } = useContext(DataContext);

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
