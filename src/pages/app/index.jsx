import CardMaster from "~/components/CardMaster";
import {
  CardImg, CardMaxIcons, Cardparagraph, CardTexts, CardTtile
} from "~/components/CardMaster/styles";
import AppLayout from "~/templates/AppLayout";
import api, { getAPIClient } from "~/services/api";
import { CardSector } from "~/styles/stylesGlobal";
import Link from 'next/link';

export default function Dashboard({ userData, dataBoard }) {

  return (
    <AppLayout userData={userData}>
      <CardSector>
        {/*  Gincana Visitantes  */}
        <Link href="/app/atividades/gincana-igreja-forte/recepcao/cadastro/visitantes">
          <a>
            <CardMaster viewSize="sizemd02">
              <CardMaxIcons>
                <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
                <CardTtile>{dataBoard?.count?.visitors}</CardTtile>
              </CardMaxIcons>
              <CardTexts>
                <Cardparagraph>
                  Gincana - Visitantes
                </Cardparagraph>
                <Cardparagraph>
                </Cardparagraph>
              </CardTexts>
            </CardMaster>
          </a>
        </Link>
        {/* Gincana Convertidos */}
        <Link href="/app/atividades/gincana-igreja-forte/recepcao/cadastro/convertido">
          <a>
            <CardMaster viewSize="sizemd02">
              <CardMaxIcons>
                <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
                <CardTtile>{dataBoard?.count?.converteds}</CardTtile>
              </CardMaxIcons>
              <CardTexts>
                <Cardparagraph>
                  Gincana - Convertidos
                </Cardparagraph>
                <Cardparagraph>
                </Cardparagraph>
              </CardTexts>
            </CardMaster>
          </a>
        </Link>
        {/* Gincana Batizados */}
        <Link href="/app/atividades/gincana-igreja-forte/recepcao/cadastro/batizado">
          <a>
            <CardMaster viewSize="sizemd02">
              <CardMaxIcons>
                <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
                <CardTtile>{dataBoard?.count?.baptizeds}</CardTtile>
              </CardMaxIcons>
              <CardTexts>
                <Cardparagraph>
                  Gincana - Batizados
                </Cardparagraph>
                <Cardparagraph>
                </Cardparagraph>
              </CardTexts>
            </CardMaster>
          </a>
        </Link>
      </CardSector>
    </AppLayout>
  );
}

import { parseCookies } from "nookies";

export const getServerSideProps = async (ctx) => {
  try {
    let { profile } = parseCookies(ctx);
    if (!profile) {
      return {
        redirect: {
          destination: "/acesso",
          permanet: false,
        },
      };
    }
    const req = await getAPIClient.get('visitors');
    const { data: dataConverteds } = await getAPIClient.get('visitors-converteds');
    const { data: dataBaptizeds } = await getAPIClient.get('visitors-baptizeds');
    console.log(req);



    let dataBoard = {
      count: {
        visitors: dataVsitors.length,
        converteds: dataConverteds.length,
        baptizeds: dataBaptizeds.length
      }
    }
    return {
      props: {
        userData: JSON.parse(profile),
        dataBoard
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        userData: null,
        dataBoard: null
      },
    };
  }
};
