import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CardMaster from "src/Components/CardMaster";
import {
  CardImg, CardMaxIcons, Cardparagraph, CardTexts,
  CardTtile
} from "src/Components/CardMaster/styles";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CardSector, Cardtata12, Cardtata4,
  Cardtata6
} from "src/styles/stylesGlobal";

export default function Dashboard({ themerData, userData, pageData = null }) {
  const router = useRouter();
  function logout() {
    try {
      setSair();
    } catch (error) {
      console.error(error);
      toast.error("incorretos! tente novamente, sair 3Sdigital applications");
    }
  }
  const setSair = () => {
    destroyCookie(null, "3sda.profile");
    destroyCookie(null, "3sda.tk");
    //return window.open("/login", "_self");
    return router.push("/app");
  };
  return (
    <AppLayout userData={userData} themerData={themerData}>
      <CardSector>
        <CardMaster viewSize="sizemd12">
          <h2>Dashborad</h2>
          <button onClick={logout}>Deslogar do sistema </button>
        </CardMaster>
      </CardSector>

      <CardSector>
        <CardMaster viewSize="sizemd12">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/platform.svg" />
            <CardTtile>{pageData.galeries?.length}</CardTtile>
          </CardMaxIcons>

          <CardTexts>
            <Cardparagraph>
              Você tem {pageData.galeries?.length}
              {pageData.galeries?.length === 1
                ? " publicação "
                : " publicações "}{" "}
              no blog site
            </Cardparagraph>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você também terá acesso ao grupo exclusivo de alunos e
              alunas, o ambiente perfeito para fortalecer habilidades
              comportamentais importantes.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>

        <CardMaster viewSize="sizemd04">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/target.svg" />
            <CardTtile>{pageData.pagePost.categories?.length}</CardTtile>
          </CardMaxIcons>
          <CardTexts>
            <Cardparagraph>Nossas empresas</Cardparagraph>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>
        <CardMaster viewSize="sizemd06">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/laptop.svg" />
            <CardTtile>{pageData.pagePost.posts?.length}</CardTtile>
          </CardMaxIcons>
          <Cardparagraph>publicações da empresas</Cardparagraph>
          <CardTexts>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você poderá contar com um time incrível de instrutores
              durante a jornada.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>
      </CardSector>

      <CardSector>
        <Cardtata4>
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
            <CardTtile>{pageData.pageSession.inscrits?.length}</CardTtile>
          </CardMaxIcons>
          <></>
          <div>
            <span>
              {pageData.galeries?.length}
              {pageData.galeries?.length === 1
                ? " incritos "
                : " incrições "}{" "}
              no site
            </span>
          </div>
        </Cardtata4>
        <Cardtata4> oioi</Cardtata4>
        <Cardtata4>3</Cardtata4>
        <Cardtata4>3</Cardtata4>
      </CardSector>
      <CardSector>
        <Cardtata12>12</Cardtata12>
      </CardSector>
      <CardSector>
        <Cardtata6>3</Cardtata6>
        <Cardtata6>3</Cardtata6>
      </CardSector>
    </AppLayout>
  );
}

import { destroyCookie, parseCookies } from "nookies";

export const getServerSideProps = async (ctx) => {
  try {
    const { "3sda.profile": profile, theme: banana } = parseCookies(ctx);

    if (!profile) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      };
    }

    const { data: pageSession } = await api.get("inscritos/lista");
    const { data: pagePost } = await api.get("postgeral/PostsGeral");
    const { data: pageData } = await api.get("galleryfefe/List");
    return {
      props: {
        themerData: banana,
        userData: JSON.parse(profile),
        pageData: {
          pageData: pageData,
          pagePost: pagePost,
          pageSession: pageSession,
        },
        // pageData: pageData,
        // pagePost: pagePost,
        // pageSession: pageSession,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/app/500",
        permanet: false,
      },
    };
  }
};
