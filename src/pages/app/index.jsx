import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CardMaster from "~/components/CardMaster";
import {
  CardImg, CardMaxIcons, Cardparagraph, CardTexts,
  CardTtile
} from "~/components/CardMaster/styles";
import { CadbtnlongV2 } from '~/styles/stylesGlobal';
import AppLayout from "~/templates/AppLayout";
import api from "~/services/api";
import {
  CardSector, Cardtata12, Cardtata4,
  Cardtata6
} from "~/styles/stylesGlobal";
import Link from 'next/link';

export default function Dashboard({ userData }) {

  return (
    <AppLayout userData={userData}>


      <CardSector>

        <CardMaster viewSize="sizemd04">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
            <CardTtile>2</CardTtile>
          </CardMaxIcons>
          <CardTexts>
            <Cardparagraph>
              Gincana - Batizados
            </Cardparagraph>
            <Cardparagraph>
              <Link href="/app/atividades/gincana-igreja-forte/recepcao/cadastro/batizado">
                <CadbtnlongV2>Batizados </CadbtnlongV2>
              </Link>
            </Cardparagraph>
          </CardTexts>
        </CardMaster>

      </CardSector>




    </AppLayout>
  );
}

import { destroyCookie, parseCookies } from "nookies";

export const getServerSideProps = async (ctx) => {
  try {
    /* let { "smc.profile": profile, theme: banana } = parseCookies(ctx); */
    const { data: usuData } = await api.get('users/6368182d8a3d19f9ad272ee2');
    /* 
        if (!profile) {
          return {
            redirect: {
              destination: "/acesso",
              permanet: false,
            },
          };
        } */

    return {
      props: {
        userData: usuData //JSON.parse(profile),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        userData: null //JSON.parse(profile),
      },
    };
  }
};
