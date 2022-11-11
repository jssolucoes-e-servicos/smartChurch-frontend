import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdCallToAction, MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import GuestLayout from "~/templates/GuestLayout";
import api from "~/services/api";
import ChurchContext from "~/contexts/churchContext";
import {
  Bglogin, Budiv, ButtonResgate, ContainerData, ContainerImgs, ContainerLogin, DicGe, DiColor, DivTX, InputdIV,
  InputTxt, SpanTXT, TxtL, Txtseparation
} from "~/styles/pages/logis";

const acesso = () => {
  const { register, handleSubmit } = useForm();
  const { setLoad } = useContext(ChurchContext);

  const router = useRouter();

  const onSubmit = async (data) => {
    console.clear();
    try {
      const { data: apiData } = await api.post("auth/login", {
        email: data.email,
        password: data.password,
      });
      setCookie(undefined, "profile", JSON.stringify(apiData.user), {
        maxAge: 60 * 60 * 1, //1 hour
      });
      setCookie(undefined, "atk", JSON.stringify(apiData.access_token), {
        maxAge: 60 * 60 * 1, //1 hour
      });
      console.log(apiData)
      //router.push("/app");
    } catch (error) {
      console.error(error);
      toast.error(
        "E-mail ou senha incorretos! tente novamente"
      );
    }
  };

  return (
    <GuestLayout>
      <ContainerLogin>
        <ContainerImgs>
          <Bglogin src="/assets/img/logo.png" />
        </ContainerImgs>

        <ContainerData>

          <DiColor>
            <DicGe>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Txtseparation>
                  <TxtL>IDENTIFIQUE-SE</TxtL>
                </Txtseparation>
                <InputdIV>
                  <Budiv>
                    <MdEmail />
                  </Budiv>
                  <InputTxt
                    type="text"
                    id="email"
                    placeholder="Seu e-mail"
                    {...register("email", {
                      required: "O Email é obrigatório",
                    })}
                  />
                </InputdIV>
                <InputdIV>
                  <Budiv id="tdtf">
                    <MdCallToAction />
                  </Budiv>
                  <InputTxt
                    type="password"
                    id="password"
                    placeholder="Sua senha"
                    {...register("password", {
                      required: "A senha é obrigatória",
                    })}
                  />
                </InputdIV>
                <InputdIV>
                  <ButtonResgate type="submit">ACESSAR</ButtonResgate>
                </InputdIV>

                <DivTX>
                  <SpanTXT>
                    <p>
                      Esqueci minha senha
                    </p>
                  </SpanTXT>
                </DivTX>
              </form>
            </DicGe>
          </DiColor>
        </ContainerData>
      </ContainerLogin>
    </GuestLayout>
  );
}

export default acesso;

export const getServerSideProps = async (ctx) => {
  const { "3sda.profile": profile } = parseCookies(ctx);
  if (profile) {
    return {
      redirect: {
        destination: "/app",
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
};
