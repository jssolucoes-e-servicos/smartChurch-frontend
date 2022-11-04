import React, { useContext, useState } from "react";

import moment from "moment-timezone";
import { BiEdit } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import CardMaster from "src/Components/CardMaster";
import {
  CardMaxIcons,
  Cardparagraph,
  CardTexts,
  CardTtile,
} from "src/Components/CardMaster/styles";
import Mastesdop from "src/Components/Dopfonrf";
import ModalDeleteGalerie from "src/Components/ModalGaleria";
import ModalPayment from "src/Components/ModalPayment";
import Tbsfer from "src/Components/TabBar";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBox,
  CadBoxBtn,
  CadBoxBtnDelete,
  CadBoxBtnTransparent,
  CardSector,
  SectorBtnTable,
} from "src/styles/stylesGlobal";
import DataContext from "~/contexts/dataContext";

import { parseCookies } from "nookies";
import {
  ContainerList,
  ContainerSpan,
  ContainerSpanActive,
  ContainerSpanInative,
} from "src/Components/Dropnovo/styles";
export default function DeveloperDetail({ devers, userData, pageData = null }) {
  const { setLoad, setOpenModal, openModal } = useContext(DataContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hasDelete, setHasDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [tableDelete, setTableDelete] = useState("post");
  // final modal
  const [dever, setPostsList] = useState(pageData.Devfilters);
  const [paymenterdev, setGalerieCompany] = useState(pageData.paymenter);
  const [developersList, setCategoriesList] = useState(devers.developers);
  const [open3sdrop, set3Drop] = useState(null);
  const onClose = async () => {
    set3Drop(null);
    setOpenModal(false);
    setIdDelete(null);
    setSelectedPost(null);
    await refreshList();
    console.log(set3Drop, "clicou");
  };
  const refreshList = async () => {
    try {
      setLoad(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };
  // console.log(developersList, "lista geral");
  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalPayment
          onClose={onClose}
          postData={selectedPost}
          desenv={developersList}
        />
      )}
      {hasDelete === true && (
        <ModalDeleteGalerie
          onClose={onClose}
          table={tableDelete}
          id={idDelete}
        />
      )}
      <CadBox>
        <div>
          <h2>galeries</h2>
        </div>
        <div>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Desenvolver
              </li>
              <li data-tab-target="#imagegalerie" className="tab">
                Pagamentos
              </li>
              <li data-tab-target="#projects" className="tab">
                Projetos
              </li>
              <li data-tab-target="#contacts" className="tab">
                Contato
              </li>
            </ul>

            <div className="tab-contentTab3s">
              {/* tab compania */}
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Desenvolver</h1>

                <p>
                  Você tem {dever?.length}
                  {dever?.length === 1
                    ? " desenvolvedor "
                    : " desenvolvedores "}
                  encontrado na base
                </p>

                <CardMaster viewSize="sizemd12">
                  <p>Itens esperado</p>
                  <p>Photo</p>
                  <p>Tilte</p>
                  <p>Descrição</p>
                  <p>Position</p>
                  <p>Active</p>
                  <CadBoxBtn type="button" onClick={() => setOpenModal(true)}>
                    Adicionar novo pagamento
                  </CadBoxBtn>
                </CardMaster>

                {dever !== null && dever.length > 0 ? (
                  <React.Fragment>
                    {dever.map(function (item) {
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
                            {/* <CardImg src={item.urlimage} /> */}
                            <CardTtile> {item.name} </CardTtile>
                          </CardMaxIcons>
                          <Cardparagraph>
                            publicações {item.description}
                          </Cardparagraph>
                          <CardTexts>
                            <Cardparagraph>
                              Tag Google {item.contact}
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
              {/* tab galeria */}
              <div id="imagegalerie" data-tab-content>
                <h1>Dados pagamento</h1>
                <h1 id="textTba"></h1>
                <p>
                  {" "}
                  onClick=
                  {() => {
                    setSelectedGalerie(item.id);
                    setOpenModal(true);
                  }}
                  Você tem {paymenterdev?.length}
                  {paymenterdev?.length === 1
                    ? " pagamento "
                    : " pagamentos "}{" "}
                  imagens na galeria do site
                </p>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>

                <CardSector>
                  {paymenterdev !== null && paymenterdev.length > 0 ? (
                    <React.Fragment>
                      {paymenterdev.map(function (item) {
                        return (
                          <>
                            <CardMaster viewSize="sizemd04" key={item.id}>
                              {/* drop maste */}
                              {(Number(open3sdrop) === Number(item.id)) ===
                                true && (
                                <Mastesdop
                                  onClose={onClose}
                                  id={item.id}
                                  key={item.id}
                                >
                                  <SectorBtnTable>
                                    <ContainerList>
                                      <ContainerSpanActive />
                                      <ContainerSpan
                                        onClick={() => {
                                          setSelectedPost(item);
                                          setOpenModal(true);
                                        }}
                                      >
                                        Editar pagamento
                                      </ContainerSpan>
                                    </ContainerList>
                                    <ContainerList>
                                      <ContainerSpanInative />
                                      <ContainerSpan>
                                        deletar item de pagamento
                                      </ContainerSpan>
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
                              {/* final drop maste */}
                              <CardMaxIcons>
                                {/* <CardImg src={item.image} /> */}
                                <CardTtile> {item.name} </CardTtile>
                              </CardMaxIcons>
                              <Cardparagraph>
                                publicações {item.project}
                              </Cardparagraph>
                              <CardTexts>
                                <Cardparagraph>
                                  Tag Valor R$ {item.price}
                                </Cardparagraph>
                                <Cardparagraph>
                                  Data pagamento{" "}
                                  {moment(item.createdAt)
                                    .tz("America/Sao_Paulo")
                                    .format("ll")}
                                </Cardparagraph>

                                <SectorBtnTable>
                                  <CadBoxBtn
                                    onClick={() => {
                                      setSelectedPost(item);
                                      setOpenModal(true);
                                    }}
                                  >
                                    <GrClose />
                                  </CadBoxBtn>

                                  <CadBoxBtnDelete
                                    onClick={() => {
                                      setTableDelete("post");
                                      setIdDelete(item.id);
                                      setHasDelete(true);
                                    }}
                                  >
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
              {/* tab projetos */}
              <div id="projects" data-tab-content>
                <h1>About</h1>
                <p>Let me tell you about me</p>
              </div>
              {/* tab contacts */}
              <div id="contacts" data-tab-content>
                <h1>Contato</h1>
                <p>Meio de comunicação</p>
                <p>Telefone = (51) 3542-5200-(51)99731-3515</p>
                <p>
                  E-mail = empresamail@compania.com.br / Discord = compaine2022
                </p>
              </div>
            </div>
          </Tbsfer>
        </div>
      </CadBox>
    </AppLayout>
  );
}
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

    const { params } = ctx;
    const { developer } = params;

    const { data: post_data } = await api.get(`Dev/Devfilter/${developer}`);
    const { data: devs } = await api.get("Dev/ListDevs");

    console.log(post_data);
    return {
      props: {
        userData: JSON.parse(profile),
        pageData: post_data,
        devers: devs,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/app/500",
        permanet: false,
      },
    };
  }
};
