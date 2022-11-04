import React, { useState } from "react";

import Mastesdop from "src/Components/Dopfonrf";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";

import { BiEdit } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import CardMaster from "src/Components/CardMaster";
import {
  CardImg,
  CardMaxIcons,
  Cardparagraph,
  CardTexts,
  CardTtile,
} from "src/Components/CardMaster/styles";
import Tbsfer from "src/Components/TabBar";
import {
  CadBox,
  CadBoxBtn,
  CadBoxBtnDelete,
  CadBoxBtnTransparent,
  CardSector,
  SectorBtnTable,
} from "src/styles/stylesGlobal";

import {
  ContainerList,
  ContainerSpan,
  ContainerSpanActive,
  ContainerSpanInative,
} from "src/Components/Dropnovo/styles";
export default function Teste({ userData, pageData = null }) {
  const [postsLista, setPostsList] = useState(pageData.alphoto);
  const [categoriesList, setCategoriesList] = useState(pageData.galeries);
  const [open3sdrop, set3Drop] = useState(null);
  const onClose = async () => {
    set3Drop(null);
    console.log(set3Drop, "clicou");
  };

  console.log(userData);

  return (
    <AppLayout userData={userData}>
      <CadBox>
        <div>
          <h2>galeries</h2>
        </div>
        <div>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Categoria empresa
              </li>
              <li data-tab-target="#imagegalerie" className="tab">
                Imagens galeria
              </li>
              <li data-tab-target="#about" className="tab">
                About
              </li>
            </ul>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Empresas</h1>

                <p>
                  Você tem {categoriesList?.length}
                  {categoriesList?.length === 1
                    ? " publicação "
                    : " publicações "}
                  empresas no site
                </p>
                <CardMaster viewSize="sizemd12">
                  <p>Itens esperado</p>
                  <p>Photo</p>
                  <p>Tilte</p>
                  <p>Descrição</p>
                  <p>Position</p>
                  <p>Active</p>
                </CardMaster>

                {categoriesList !== null && categoriesList.length > 0 ? (
                  <React.Fragment>
                    {categoriesList.map(function (item) {
                      return (
                        <CardMaster
                          viewSize="sizemd12"
                          key={item.id}
                          onClose={onClose}
                          id={item.id}
                        >
                          {(Number(open3sdrop) === Number(item.id)) ===
                            true && (
                            <Mastesdop onClose={onClose} id={item.id}>
                              <SectorBtnTable>
                                <ContainerList>
                                  <ContainerSpanActive />
                                  <ContainerSpan>Editar item</ContainerSpan>
                                </ContainerList>
                                <ContainerList>
                                  <ContainerSpanInative />
                                  <ContainerSpan>deletar item</ContainerSpan>
                                </ContainerList>
                              </SectorBtnTable>
                            </Mastesdop>
                          )}
                          <SectorBtnTable>
                            <CadBoxBtnTransparent
                              id={item.id}
                              onClick={() => {
                                set3Drop(item.id);
                                // set3Drop(item.id);
                              }}
                            >
                              <FaEllipsisV />
                            </CadBoxBtnTransparent>
                          </SectorBtnTable>
                          <CardMaxIcons>
                            <CardImg src={item.urlimage} />
                            <CardTtile> {item.title} </CardTtile>
                          </CardMaxIcons>
                          <Cardparagraph>
                            publicações {item.description}
                          </Cardparagraph>
                          <CardTexts>
                            <Cardparagraph>
                              Tag Google {item.position}
                            </Cardparagraph>
                          </CardTexts>
                        </CardMaster>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  <span>Sem Conteúdo</span>
                )}
              </div>

              <div id="imagegalerie" data-tab-content>
                <h1>Galeria</h1>
                <h1 id="textTba"></h1>
                <p>
                  Você tem {postsLista?.length}
                  {postsLista?.length === 1
                    ? " publicação "
                    : " publicações "}{" "}
                  imagens na galeria do site
                </p>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>

                <CardSector>
                  {postsLista !== null && postsLista.length > 0 ? (
                    <React.Fragment>
                      {postsLista.map(function (item) {
                        return (
                          <>
                            <CardMaster viewSize="sizemd04" key={item.id}>
                              <CardMaxIcons>
                                <CardImg src={item.image} />
                                <CardTtile> {item.grid} </CardTtile>
                              </CardMaxIcons>
                              <Cardparagraph>
                                publicações {item.categorie}
                              </Cardparagraph>
                              <CardTexts>
                                <Cardparagraph>
                                  Tag Google {item.title}
                                </Cardparagraph>
                                <SectorBtnTable>
                                  <CadBoxBtn>
                                    <GrClose />
                                  </CadBoxBtn>

                                  <CadBoxBtnDelete>
                                    <BiEdit />
                                  </CadBoxBtnDelete>
                                </SectorBtnTable>
                              </CardTexts>
                            </CardMaster>
                          </>
                        );
                      })}
                    </React.Fragment>
                  ) : (
                    <span>Sem Conteúdo</span>
                  )}
                </CardSector>
              </div>
              <div id="about" data-tab-content>
                <h1>About</h1>
                <p>Let me tell you about me</p>
              </div>
            </div>
          </Tbsfer>
        </div>
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
    return { props: { userData: JSON.parse(profile), pageData: pageData } };
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
