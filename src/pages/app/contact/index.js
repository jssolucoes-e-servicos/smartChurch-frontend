import { useMemo, useState } from "react";

import moment from "moment-timezone";
import { BiEdit } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import CardMaster from "src/Components/CardMaster";
import {
  CardMaxIcons,
  Cardparagraph,
  CardTexts,
  CardTtile,
} from "src/Components/CardMaster/styles";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBox,
  CadBoxBtn,
  CadBoxBtnTransparent,
  Cadbtnlong,
  CardSector,
  SectorBtnTable,
} from "src/styles/stylesGlobal";
import Form from "../../../Components/BlockForm";
export default function Teste({ userData, pageData = null, inscritos = null }) {
  const [inscrit, setInscrits] = useState(inscritos.inscrits);
  // console.log(inscrit, "inscritos");
  const onClose = async () => {
    set3Drop(null);
    console.log(set3Drop, "clicou");
  };

  const [busca, setBusca] = useState("");

  const frutasfiltrada = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return inscrit.filter((fruta) =>
      fruta.name.toLowerCase().includes(lowerBusca)
    );
  }, [busca]);

  //con
  // FUNCIONANDO
  // const lowerBusca = busca.toLowerCase();
  // const frutasfiltrada = inscrit.filter((fruta) =>
  //   fruta.name.toLowerCase().includes(lowerBusca)
  // );
  // //console.log(busca, "buscas");
  // const handleFilter = (sector) => {
  //   const frutasfiltrada = inscrit.filter((sector) =>
  //     sector.name.toLowerCase().includes(busca)
  //   );
  //   setBusca(frutasfiltrada);
  //   console.log(frutasfiltrada, "setor");
  // };

  // const filteredByName = dadofake.filter((item) =>
  //   item.name.toLowerCase().includes(category.toLowerCase())
  // );
  //console.log(buscarteste, "busca");
  return (
    <AppLayout userData={userData}>
      <CadBox>
        <Form />
        <div>
          <h2>Filtro de inscritos</h2>
        </div>
        <>
          <input
            value={busca}
            name="1"
            onChange={(e) => {
              setBusca(e.target.value);
            }}
            // onChange={(ev) => {
            //   setBusca(ev.target.value);
            // }}
            style={{ width: 500, height: 45 }}
          />

          <CardSector>
            {frutasfiltrada !== null ? (
              frutasfiltrada.map((item) => {
                return (
                  <>
                    <CardMaster viewSize="sizemd04" key={item.id}>
                      <SectorBtnTable>
                        <CadBoxBtnTransparent
                          id={item.id}
                          onClick={() => {
                            //set3Drop(item.id);
                            // set3Drop(item.id);
                          }}
                        >
                          <FaEllipsisV />
                        </CadBoxBtnTransparent>
                      </SectorBtnTable>
                      {/* final drop */}
                      <CardMaxIcons>
                        <CardTtile> {item.name} </CardTtile>
                      </CardMaxIcons>

                      <CardTexts>
                        {item.createdAt === undefined ||
                        item.createdAt === null ? (
                          <Cardparagraph>task aberta</Cardparagraph>
                        ) : (
                          <Cardparagraph> {item.createdAt} </Cardparagraph>
                        )}

                        <Cardparagraph>Tag {item.categoria}</Cardparagraph>
                        <Cardparagraph>
                          Data criação{" "}
                          {moment(item.createdAt)
                            .tz("America/Sao_Paulo")
                            .format("ll")}
                        </Cardparagraph>

                        <SectorBtnTable>
                          {item.stoptime === null ||
                          item.stoptime === undefined ? (
                            <Cadbtnlong>
                              <BiEdit /> encerrar
                            </Cadbtnlong>
                          ) : (
                            <CadBoxBtn>Adicionar tempo</CadBoxBtn>
                          )}
                        </SectorBtnTable>
                      </CardTexts>
                    </CardMaster>
                  </>
                );
              })
            ) : (
              <span>Sem Conteúdo</span>
            )}
          </CardSector>
        </>
      </CadBox>
    </AppLayout>
  );
}

import { parseCookies } from "nookies";

export const getServerSideProps = async (ctx) => {
  try {
    const { "3sda.profile": profile } = parseCookies(ctx);
    if (!profile) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      };
    }

    const { data: pageData } = await api.get("galleryfefe/List");
    const { data: inscritos } = await api.get("inscritos/lista");
    return {
      props: {
        userData: JSON.parse(profile),
        pageData: pageData,
        inscritos: inscritos,
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
