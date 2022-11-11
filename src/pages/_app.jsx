import React, { useEffect } from "react";
import "src/styles/globals.css";
import { ChurchProvider } from "~/contexts/churchContext";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "~/styles/nprogress.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  //const [inLoad, setInLoad] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <ChurchProvider>
      <React.Fragment>

        <Component {...pageProps} />

      </React.Fragment>
    </ChurchProvider>
  );
}

export default MyApp;
