import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import GuestLayout from "src/layouts/GuestLayout";
import DataContext from "~/contexts/dataContext";
import api from "src/services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import { MdEmail, MdCallToAction } from "react-icons/md";
import {
  ContainerLogin,
  ContainerImgs,
  Bglogin,
  ContainerData,
  DiColor,
  DicGe,
  FormS,
  Txtseparation,
  TxtL,
  InputdIV,
  InputTxt,
  ButtonResgate,
  DivTX,
  SpanTXT,
  Budiv,
  Divisiond,
  ContainerInt,
  BtnData,
} from "~/styles/pages/logis";

export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const { setLoad } = useContext(DataContext);
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const { data: apiData } = await api.post("usuario/login", {
        email: data.email,
        password: data.password,
      });
      setCookie(undefined, "3sda.profile", JSON.stringify(apiData), {
        maxAge: 60 * 60 * 1, //1 hour
      });
      setCookie(undefined, "3sda.tk", JSON.stringify(apiData.token), {
        maxAge: 60 * 60 * 1, //1 hour
      });
      router.push("/app");
    } catch (error) {
      console.error(error);
      toast.error(
        "E-mail ou senha incorretos! tente novamente, ou entre em contato com 3Sdigital applications"
      );
    }
  };

  return (
    <GuestLayout>
      <ContainerLogin>
        <ContainerImgs>
          <Bglogin src="/assets/img/bglogin.jpg" />
        </ContainerImgs>
        {/* dados */}
        <ContainerData>
          <DiColor>
            <DicGe>
              <FormS onSubmit={handleSubmit(onSubmit)}>
                <Txtseparation>
                  <TxtL>Faça seu login</TxtL>
                </Txtseparation>

                <Divisiond>
                  <Budiv>
                    <MdEmail />
                  </Budiv>
                  <ContainerInt
                    type="text"
                    id="email"
                    {...register("email", {
                      required: "O Email é obrigatório",
                    })}
                  />
                </Divisiond>
                <Divisiond>
                  <label htmlFor="password">Senha</label>
                  <ContainerInt
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "A senha é obrigatória",
                    })}
                  />
                </Divisiond>
                <Divisiond>
                  <BtnData type="submit">Acessar</BtnData>
                </Divisiond>
                <Divisiond>
                  <label>
                    <input type="checkbox" value="checked" />
                    Option one is this
                    <span>
                      <span className="check"></span>
                    </span>
                  </label>
                </Divisiond>
                <div>
                  <span>
                    <a href="#">Forgot Password</a>
                  </span>
                </div>
              </FormS>
              <span
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 19,
                }}
              >
                &mdash; faça login com sua credencial &mdash;
              </span>
            </DicGe>
          </DiColor>
          {/* <DiColor>
            <DicGe>
              <FormS onSubmit={handleSubmit(onSubmit)}>
                <Txtseparation>
                  <TxtL>Faça seu login</TxtL>
                </Txtseparation>
                <InputdIV>
                  <Budiv>
                    <MdEmail />
                  </Budiv>
                  <InputTxt
                    type="text"
                    id="email"
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
                    {...register("password", {
                      required: "A senha é obrigatória",
                    })}
                  />
                </InputdIV>
                <InputdIV>
                  <ButtonResgate type="submit">ACESSAR DASHBOARD</ButtonResgate>
                </InputdIV>

                <DivTX>
                  <SpanTXT>
                    <p>
                      <input
                        type="checkbox"
                        value="consent"
                        id="gtm-dowhile-main-form-input-consent"
                      />
                      Ao clicar em GARANTIR MEU LUGAR, você confirma a sua
                      participação no DoWhile e autoriza o tratamento dos dados
                      pessoais pela Rocketseat para viabilizar a sua
                      participação no evento e receber eventuais comunicações da
                      Rocketseat.
                    </p>
                  </SpanTXT>
                </DivTX>
              </FormS>
            </DicGe>
          </DiColor> */}
        </ContainerData>
      </ContainerLogin>
    </GuestLayout>
  );
}

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
