import React, { useState } from "react";

import Link from "next/link";
import Mastesdop from "src/Components/Dopfonrf";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";

import { FaEllipsisV } from "react-icons/fa";
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
  CadBoxBtnTransparent,
  SectorBtnTable,
} from "src/styles/stylesGlobal";

import {
  ContainerList,
  ContainerSpan,
  ContainerSpanActive,
  ContainerSpanInative,
} from "src/Components/Dropnovo/styles";
export default function Teste({ userData, pageData = null }) {
  console.log(pageData);
  const [postsLista, setPostsList] = useState(pageData.alphoto);
  const [categoriesList, setCategoriesList] = useState(pageData.galeries);
  const [open3sdrop, set3Drop] = useState(null);
  const [textoligado, setLigado] = useState(false);

  const onClose = async () => {
    set3Drop(null);
    console.log(set3Drop, "clicou");
  };

  console.log(userData);

  return (
    <AppLayout userData={userData}>
      <CadBox>
        <div>
          <button
            onClick={() => {
              setLigado(!textoligado);
            }}
          >
            {textoligado === true ? "ligado" : "desligado"}
          </button>
        </div>
        <div>
          <h2>galeries</h2>
        </div>
        <div>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Categoria empresa
              </li>
              <li data-tab-target="#contacts" className="tab">
                Contato
              </li>
            </ul>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Companie parceiras</h1>

                <p>
                  Você tem {categoriesList?.length}
                  {categoriesList?.length === 1
                    ? " publicação "
                    : " publicações "}
                  empresas no site
                </p>
                <CardMaster viewSize="sizemd12">
                  <b>Itens esperado</b> / <b>Photo</b> / <b>Tilte</b> /
                  <b>Descrição</b> / <b>position</b> / <b>Active</b>
                </CardMaster>

                {categoriesList !== null && categoriesList.length > 0 ? (
                  <React.Fragment>
                    {categoriesList.map(function (post) {
                      return (
                        <CardMaster
                          viewSize="sizemd12"
                          key={post.id}
                          onClose={onClose}
                          id={post.id}
                        >
                          {(Number(open3sdrop) === Number(post.id)) ===
                            true && (
                            <Mastesdop onClose={onClose} id={post.id}>
                              <SectorBtnTable>
                                <ContainerList>
                                  <ContainerSpanActive />
                                  <Link
                                    key={post.id}
                                    href={`/app/company/${post.url}`}
                                  >
                                    <a
                                      key={post.id}
                                      href={`/app/company/${post.url}`}
                                    >
                                      <ContainerSpan>
                                        Editar empresa
                                      </ContainerSpan>
                                    </a>
                                  </Link>
                                </ContainerList>
                                <ContainerList>
                                  <ContainerSpanInative />
                                  <ContainerSpan>deletar post</ContainerSpan>
                                </ContainerList>
                              </SectorBtnTable>
                            </Mastesdop>
                          )}
                          <SectorBtnTable>
                            <CadBoxBtnTransparent
                              id={post.id}
                              onClick={() => {
                                set3Drop(post.id);
                                // set3Drop(post.id);
                              }}
                            >
                              <FaEllipsisV />
                            </CadBoxBtnTransparent>
                          </SectorBtnTable>
                          <CardMaxIcons>
                            <CardImg src={post.urlimage} />
                            <CardTtile> {post.title} </CardTtile>
                          </CardMaxIcons>
                          <Cardparagraph>
                            publicações {post.description}
                          </Cardparagraph>
                          <CardTexts>
                            <Cardparagraph>Tag Google {post.url}</Cardparagraph>
                          </CardTexts>
                        </CardMaster>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  <span>Sem Conteúdo</span>
                )}
              </div>
              <div id="contacts" data-tab-content>
                <h1>Contatos</h1>
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
