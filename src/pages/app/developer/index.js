import React, { useContext, useState } from "react";

import Link from "next/link";
import { FaEllipsisV } from "react-icons/fa";
import CardMaster from "src/Components/CardMaster";
import {
  CardMaxIcons,
  Cardparagraph,
  CardTexts,
  CardTtile,
} from "src/Components/CardMaster/styles";
import Mastesdop from "src/Components/Dopfonrf";
import ModalPayment from "src/Components/ModalPayment";
import Tbsfer from "src/Components/TabBar";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBox,
  CadBoxBtn,
  CadBoxBtnTransparent,
  SectorBtnTable,
} from "src/styles/stylesGlobal";
import DataContext from "~/contexts/dataContext";

import {
  ContainerList,
  ContainerSpan,
  ContainerSpanActive,
  ContainerSpanInative,
} from "src/Components/Dropnovo/styles";
export default function Developers({ userData, pageData = null }) {
  const { setLoad, setOpenModal, openModal } = useContext(DataContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postsLista, setPostsList] = useState(pageData.alphoto);
  const [developersList, setCategoriesList] = useState(pageData.developers);
  const [open3sdrop, set3Drop] = useState(null);
  const onClose = async () => {
    setOpenModal(false);
    setSelectedPost(null);
    set3Drop(null);
    console.log(set3Drop, "clicou");
  };

  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalPayment
          onClose={onClose}
          postData={selectedPost}
          desenv={developersList}
        />
      )}
      <CadBox>
        <div>
          <h2>Developers</h2>
        </div>
        <div>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Categoria devs
              </li>
              <li data-tab-target="#contacts" className="tab">
                Contato
              </li>
            </ul>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Companie parceiras</h1>

                <p>
                  Você tem {developersList?.length}
                  {developersList?.length === 1
                    ? " publicação "
                    : " publicações "}
                  empresas no site
                </p>
                <CardMaster viewSize="sizemd12">
                  <b>Itens esperado</b> / <b>Photo</b> / <b>Tilte</b> /
                  <b>Descrição</b> / <b>position</b> / <b>Active</b>
                  <p>
                    {" "}
                    <CadBoxBtn type="button" onClick={() => setOpenModal(true)}>
                      Adicionar novo pagamento
                    </CadBoxBtn>
                  </p>
                </CardMaster>

                {developersList !== null && developersList.length > 0 ? (
                  <React.Fragment>
                    {developersList.map(function (post) {
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
                                    href={`/app/developer/${post.id}`}
                                  >
                                    <a
                                      key={post.id}
                                      href={`/app/developer/${post.id}`}
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
                            {/* <CardImg src={post.urlimage} /> */}
                            <CardTtile> {post.name} </CardTtile>
                          </CardMaxIcons>
                          <Cardparagraph>
                            publicações {post.description}
                          </Cardparagraph>
                          <CardTexts>
                            <Cardparagraph>
                              Tag Google {post.price}
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

    const { data: pageData } = await api.get("Dev/ListDevs");
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
