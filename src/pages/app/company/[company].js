import React, { useContext, useState } from "react";

import moment from "moment-timezone";
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
import Mastesdop from "src/Components/Dopfonrf";
import ModalDeleteGalerie from "src/Components/ModalGaleria";
import ModalEditaGaley from "src/Components/ModalGalery";
import ModalStartimer from "src/Components/ModalTimeProject";
import Tbsfer from "src/Components/TabBar";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBox,
  CadBoxBtn,
  CadBoxBtnDelete,
  CadBoxBtnTransparent,
  Cadbtnlong,
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
export default function EmpresaDetail({
  userData,
  pageData = null,
  devers,
  projects,
}) {
  const { setLoad, setOpenModal, openModal } = useContext(DataContext);
  //const { openTimer, setOpenTimer } = useContext(DataContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalTime, setModaTime] = useState(false); //modal INSERT
  const [selectedGaleie, setSelectedGalerie] = useState(null);
  const [hasDelete, setHasDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [tableDelete, setTableDelete] = useState("post");
  // final modal
  const [companie, setPostsList] = useState(pageData.submenufilters);
  const [galerieCompany, setGalerieCompany] = useState(
    pageData.galeriescompanie
  );
  const [projectCompany, setProjectCompany] = useState(
    pageData.projectscompanie
  );
  const [timehorasCompany, setTimehoras] = useState(
    pageData.projectscompanie.timechronometers
  );
  const [selectedTimer, setSelectTimer] = useState(null);
  const [developersList, setCategoriesList] = useState(devers.developers);
  const [projectlist, setProjectListr] = useState(projects.projects);

  console.log(projectCompany, "task de horas liberada");

  //setSelectTimer(item);

  const [open3sdrop, set3Drop] = useState(null);
  const onClose = async () => {
    set3Drop(null);
    setOpenModal(false);
    setSelectedPost(null);
    //setOpenTimer(false);
    setIdDelete(null);
    setSelectedGalerie(null);
    console.log(set3Drop, "clicou");
  };
  function ModalTimer() {
    setModaTime(true);
  }
  console.log(companie, galerieCompany, "TEM DADOS AGORA");
  const dataatual = new Date("2022-09-08 08:00:04");
  // moment(dataatual).format();

  // moment(dataatual).format("YYYY [escaped] YYYY");
  //console.log(dataatual.toDateString("dd/mm/yyyy hh:ii:ss"), "modificada");
  console.log(new Intl.DateTimeFormat("pt-BR").format(dataatual));
  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalEditaGaley onClose={onClose} postData={selectedGaleie} />
      )}
      {hasDelete === true && (
        <ModalDeleteGalerie
          onClose={onClose}
          table={tableDelete}
          id={idDelete}
        />
      )}
      {modalTime === true && (
        <ModalStartimer
          onClose={() => {
            setModaTime(false);
            setModaTime(null);
          }}
          postData={selectedTimer}
          desenv={developersList}
          project={projectlist}
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
                Categoria empresa
              </li>
              <li data-tab-target="#imagegalerie" className="tab">
                Imagens galeria
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
                <h1>Empresas</h1>

                <p>
                  Você tem {companie?.length}
                  {companie?.length === 1 ? " publicação " : " publicações "}
                  empresas no site
                </p>
                <CardMaster viewSize="sizemd12">
                  <b>Itens esperado</b> / <b>Photo</b> / <b>Tilte</b> /
                  <b>Descrição</b> / <b>position</b> / <b>Active</b>
                  <b style={{ marginLeft: 20, marginRight: 20 }}>
                    <CadBoxBtn type="button" onClick={() => setOpenModal(true)}>
                      Adicionar novo
                    </CadBoxBtn>
                  </b>
                </CardMaster>

                {companie !== null && companie.length > 0 ? (
                  <React.Fragment>
                    {companie.map(function (item) {
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
              {/* tab galeria */}
              <div id="imagegalerie" data-tab-content>
                <h1>Galeria</h1>
                <h1 id="textTba"></h1>
                <p>
                  Você tem {galerieCompany?.length}
                  {galerieCompany?.length === 1
                    ? " publicação "
                    : " publicações "}{" "}
                  imagens na galeria do site
                </p>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>

                <CardSector>
                  {galerieCompany !== null && galerieCompany.length > 0 ? (
                    <React.Fragment>
                      {galerieCompany.map(function (item) {
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
                                  <CadBoxBtn
                                    onClick={() => {
                                      setSelectedGalerie(item.id);
                                      setOpenModal(true);
                                    }}
                                  >
                                    <BiEdit />
                                  </CadBoxBtn>

                                  <CadBoxBtnDelete
                                    onClick={() => {
                                      setTableDelete("post");
                                      setIdDelete(item.id);
                                      setHasDelete(true);
                                    }}
                                  >
                                    <GrClose />
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
                <h1>Projetos da companhia</h1>
                <CardSector>
                  {projectCompany !== null && projectCompany.length > 0 ? (
                    <React.Fragment>
                      {projectCompany.map(function (item) {
                        return (
                          <>
                            {/* <>
                              {item.timechronometers
                                ? item.timechronometers.map((obj) => {
                                    return (
                                      <>
                                        <p>{obj.description}ddddd</p>
                                      </>
                                    );
                                  })
                                : null}
                            </> */}
                            <CardMaster viewSize="sizemd04" key={item.id}>
                              {/* Drop drop */}
                              {(Number(open3sdrop) === Number(item.id)) ===
                                true && (
                                <Mastesdop onClose={onClose} id={item.id}>
                                  <SectorBtnTable>
                                    <ContainerList>
                                      <ContainerSpanActive />
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
                              {/* final drop */}
                              <CardMaxIcons>
                                <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
                                <CardTtile> {item.starttime} </CardTtile>
                              </CardMaxIcons>
                              <Cardparagraph>
                                {item.stoptime === undefined ||
                                item.stoptime === null ? (
                                  <CardTtile>task aberta</CardTtile>
                                ) : (
                                  <CardTtile> {item.stoptime} </CardTtile>
                                )}
                              </Cardparagraph>
                              <Cardparagraph>
                                Price R$: {item.price}
                              </Cardparagraph>
                              <CardTexts>
                                <Cardparagraph>
                                  Tag Google {item.name}
                                </Cardparagraph>
                                <Cardparagraph>
                                  Data criação{" "}
                                  {moment(item.createdAt)
                                    .tz("America/Sao_Paulo")
                                    .format("ll")}
                                </Cardparagraph>

                                <SectorBtnTable>
                                  {item.stoptime === null ||
                                  item.stoptime === undefined ? (
                                    <Cadbtnlong
                                      onClick={() => {
                                        ModalTimer();
                                        setSelectTimer(item);
                                      }}
                                    >
                                      <BiEdit /> encerrar
                                    </Cadbtnlong>
                                  ) : (
                                    <CadBoxBtn
                                      onClick={() => {
                                        ModalTimer();
                                        setSelectTimer(item);
                                      }}
                                    >
                                      Adicionar tempo
                                    </CadBoxBtn>
                                  )}
                                </SectorBtnTable>
                              </CardTexts>
                              <>
                                {/* <CardMaster key={"1"}>
                                  {item.timechronometers !== null &&
                                  item.timechronometers.length > 0 ? (
                                    <>
                                      {item.timechronometers.map(function (
                                        obj
                                      ) {
                                        return (
                                          <>
                                            <p key={obj.id}></p>
                                            <span>{obj.description}</span>
                                            <SectorBtnTable>
                                              {obj.active === null ||
                                              obj.active === 1 ? (
                                                <Cadbtnlong
                                                  onClick={() => {
                                                    ModalTimer();
                                                    setSelectTimer(obj);
                                                  }}
                                                >
                                                  <BiEdit /> encerrar
                                                </Cadbtnlong>
                                              ) : (
                                                <CadBoxBtn
                                                  onClick={() => {
                                                    ModalTimer();
                                                    setSelectTimer(obj);
                                                  }}
                                                >
                                                  Adicionar tempo
                                                </CadBoxBtn>
                                              )}
                                            </SectorBtnTable>
                                          </>
                                        );
                                      })}
                                    </>
                                  ) : null}
                                </CardMaster> */}
                              </>
                            </CardMaster>

                            {/* {item.timechronometers !== null &&
                            item.timechronometers.length > 0 ? (
                              <>
                                {item.timechronometers.map(function (obj) {
                                  return (
                                    <>
                                      <p key={obj.id}></p>
                                      <span>{obj.description}</span>
                                      <SectorBtnTable>
                                        {obj.stoptime === null ||
                                        obj.stoptime === undefined ? (
                                          <Cadbtnlong
                                            onClick={() => {
                                              ModalTimer();
                                              setSelectTimer(obj);
                                            }}
                                          >
                                            <BiEdit /> encerrar
                                          </Cadbtnlong>
                                        ) : (
                                          <CadBoxBtn
                                            onClick={() => {
                                              ModalTimer();
                                              setSelectTimer(obj);
                                            }}
                                          >
                                            Adicionar tempo
                                          </CadBoxBtn>
                                        )}
                                      </SectorBtnTable>
                                    </>
                                  );
                                })}
                              </>
                            ) : null} */}
                          </>
                        );
                      })}
                    </React.Fragment>
                  ) : (
                    <span>Sem Conteúdo</span>
                  )}
                </CardSector>
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
    const { company } = params;

    const { data: post_data } = await api.get(`galery/galerry/${company}`);
    const { data: devs } = await api.get("Dev/ListDevs");
    const { data: projects } = await api.get("galery/projeto");

    console.log(post_data);
    return {
      props: {
        userData: JSON.parse(profile),
        pageData: post_data,
        devers: devs,
        projects: projects,
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
