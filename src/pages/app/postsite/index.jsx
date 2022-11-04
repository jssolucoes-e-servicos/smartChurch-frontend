import React, { useContext, useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FcDeleteDatabase } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import ModalDeletePost from "src/Components/ModalDelete";
import ModalEditarPosts from "src/Components/ModalPostF";
import Tbsfer from "src/Components/TabBar";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBoxBtn,
  CadBoxBtnDelete,
  SectorBtnTable
} from "src/styles/stylesGlobal";
import DataContext from "~/contexts/dataContext";

import CardMaster from "src/Components/CardMaster";
import {
  CardImg, CardMaxIcons, Cardparagraph, CardTexts
} from "src/Components/CardMaster/styles";
import { CardSector } from "src/styles/stylesGlobal";
export default function PostSite({ userData, pageData = null }) {
  const { setLoad, setOpenModal, openModal } = useContext(DataContext);

  const [postsList, setPostsList] = useState(pageData.posts);
  const [categoriesList, setCategoriesList] = useState(pageData.categories);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hasDelete, setHasDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [tableDelete, setTableDelete] = useState("post");
  const onClose = async () => {
    setPostsList(null);
    setSelectedPost(null);
    setOpenModal(false);
    setOpenModal(false);
    setIdDelete(null);
    setHasDelete(false);
    await refreshList();
  };
  const refreshList = async () => {
    try {
      setLoad(true);
      const { data } = await api.get("postgeral/PostsGeral");
      setCategoriesList(data.categories);
      setPostsList(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };
  console.log(postsList);
  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalEditarPosts onClose={onClose} postData={selectedPost} />
      )}
      {hasDelete === true && (
        <ModalDeletePost onClose={onClose} table={tableDelete} id={idDelete} />
      )}
      <div>
        <h2>galeries</h2>
      </div>
      <div>
        <Tbsfer>
          <ul className="tabs">
            <li data-tab-target="#categoryagalerie" className="active tab">
              Categoria post
            </li>
            <li data-tab-target="#imagegalerie" className="tab">
              Post-site
            </li>
            <li data-tab-target="#about" className="tab">
              About
            </li>
          </ul>

          <div className="tab-contentTab3s">
            <div id="categoryagalerie" data-tab-content className="active">
              <h1>Categoria post</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>
                  Você tem {categoriesList?.length}
                  {categoriesList?.length === 1
                    ? " publicação "
                    : " publicações "}
                  empresas no site
                </p>
                <CadBoxBtn type="button" onClick={() => setOpenModal(true)}>
                  Adicionar novo
                </CadBoxBtn>
              </div>

              <table className="TableValtra">
                <tbody>
                  <tr>
                    <th>PHOTO</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>POSITION</th>
                    <th>ACTIONS&nbsp;(L/MIN.)</th>
                  </tr>

                  {categoriesList !== null && categoriesList.length > 0 ? (
                    <React.Fragment>
                      {categoriesList.map(function (item) {
                        return (
                          <tr key={`post-items-${item.id}`}>
                            <td>
                              <img
                                className="img-thumbnail"
                                width="70"
                                src={item.urlimage}
                                alt={item.title}
                              />
                            </td>
                            <td>{item.title}</td>
                            <td>Categoria {item.idcategory}</td>

                            <td>{item.position}</td>
                            <td>
                              <SectorBtnTable>
                                {userData.sector === "CEO/Cofundador" ? (
                                  <>
                                    <CadBoxBtn>
                                      <AiFillFolderOpen />
                                    </CadBoxBtn>
                                    <CadBoxBtn
                                      onClick={() => {
                                        setSelectedPost(item);
                                        setOpenModal(true);
                                      }}
                                    >
                                      <BiEdit />d
                                    </CadBoxBtn>

                                    <CadBoxBtnDelete
                                      onClick={() => {
                                        setTableDelete("post");
                                        setIdDelete(item.id);
                                        setHasDelete(true);
                                      }}
                                    >
                                      <FcDeleteDatabase />
                                    </CadBoxBtnDelete>
                                  </>
                                ) : (
                                  <CadBoxBtn>
                                    <AiFillFolderOpen />
                                  </CadBoxBtn>
                                )}
                              </SectorBtnTable>
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : (
                    <span>Sem Conteúdo</span>
                  )}
                </tbody>
              </table>

              {/* <table className="Tabele3s" id="">
                <tbody>
                  <tr>
                    <th>PHOTO</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>POSITION</th>
                    <th>ACTIONS</th>
                  </tr>

                  {categoriesList !== null && categoriesList.length > 0 ? (
                    <React.Fragment>
                      {categoriesList.map(function (item) {
                        return (
                          <tr key={`post-items-${item.id}`}>
                            <td>
                              <img
                                className="img-thumbnail"
                                width="70"
                                src={item.urlimage}
                                alt={item.title}
                              />
                            </td>
                            <td className="Tds">{item.title}</td>
                            <td>Categoria {item.idcategory}</td>

                            <td>{item.position}</td>
                            <td>
                              <SectorBtnTable>
                                <CadBoxBtn
                                  onClick={() => {
                                    setSelectedPost(item);
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
                                  <FcDeleteDatabase />
                                </CadBoxBtnDelete>
                                <CadBoxBtn>
                                  <AiFillFolderOpen />
                                </CadBoxBtn>
                              </SectorBtnTable>
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : (
                    <span>Sem Conteúdo</span>
                  )}
                </tbody>
              </table> */}
            </div>

            <div id="imagegalerie" data-tab-content>
              <h1>Galeria</h1>
              <h1 id="textTba"></h1>
              <p>
                Você tem {postsList?.length}
                {postsList?.length === 1
                  ? " publicação "
                  : " publicações "}{" "}
                imagens na galeria do site
              </p>
              <CardSector>
                <h6 className="mb-1">Projects</h6>
              </CardSector>

              <CardSector>
                {postsList !== null && postsList.length > 0 ? (
                  <React.Fragment>
                    {postsList.map(function (item) {
                      return (
                        <>
                          <CardMaster viewSize="sizemd4">
                            <CardMaxIcons key={item.id}>
                              <CardImg src={item.urlimage} />
                              <CardTexts>
                                <Cardparagraph>{item.title}</Cardparagraph>
                                <Cardparagraph>
                                  {item.description}
                                </Cardparagraph>
                                <Cardparagraph>{item.urlproduct}</Cardparagraph>
                                <Cardparagraph>{item.idcategory}</Cardparagraph>
                              </CardTexts>

                              <CardTexts>
                                <a
                                  style={{
                                    background: "red",
                                    width: 60,
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  href="#"
                                >
                                  <GrClose />
                                </a>

                                <a
                                  style={{
                                    background: "blue",
                                    width: 60,
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  href="#"
                                >
                                  <BiEdit />
                                </a>
                              </CardTexts>
                            </CardMaxIcons>
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
    const { data: pageData } = await api.get("postgeral/PostsGeral");
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
