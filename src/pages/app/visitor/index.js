import React, { useState, useEffect, useContext, useMemo } from "react";
import { toast } from "react-toastify";
import AppLayout from "~/templates/AppLayout";
import api from "~/services/api";
import ModalVisitors from "~/components/ModalVisitor";
import ChurchContext from "~/contexts/churchContext";
import {
  CadBox,
  FilterName,
  FilterIpt,
  SelectedFilter,
  Cardtata4,
} from "src/styles/stylesGlobal";
import Tbsfer from "~/partials/TabBar";
import CardMaster from "~/components/CardMaster";
import { CardSector, CadbtnlongV2, CadBoxBtn } from "~/styles/stylesGlobal";
export default function Visitors({ userData, pageData = null }) {
  const { setLoad, setOpenModal, openModal } = useContext(ChurchContext);
  const onClose = async () => {
    setOpenModal(false);
    setSelectedPost(null);

    console.log(set3Drop, "clicou");
  };

  const [inscritList, setPostsList] = useState(pageData.inscrits);
  const [subcategories, setSubcategories] = useState();
  const [terms, setTerms] = useState(false);
  console.log(terms, "terms");
  console.log(dadofake);
  console.log("subcategories", subcategories);
  const [teste, setTeste] = useState(false);

  // filtros por nome
  const [busca, setBusca] = useState("");
  const NewDatapost = useMemo(() => {
    const lowerPost = busca.toLowerCase();
    return inscritList.filter((posts) =>
      posts.name.toLowerCase().includes(lowerPost)
    );
  }, [busca]);
  console.log(NewDatapost, "busca");
  //final do filtro
  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalVisitors onClose={onClose} postData={inscritList} />
      )}

      <CadBox>
        <div>
          <button
            onClick={() => {
              setTeste(!teste);
            }}
          >
            {" "}
            {teste === true ? "Administrador" : "Visitante"}
          </button>
          <h2>Lista de Visitantes</h2>
        </div>
        <div>
          <CardMaster viewSize="sizemd12">
            bloco onde encontrar
            <FilterName>
              <FilterIpt
                value={busca}
                name="1"
                onChange={(e) => {
                  setBusca(e.target.value);
                }}
                placeholder="Faça sua pesquise..."
              />
              <SelectedFilter id="setor">
                <option>Selecione Horario relacionado</option>
                <>
                  <option value="1">manhã</option>
                  <option value="2">tarde</option>
                  <option value="3">noite</option>
                  <option value="4">madrugada</option>
                  <option value="5">qualquer horario</option>
                </>
              </SelectedFilter>
            </FilterName>
          </CardMaster>

          <Tbsfer>
            <CardSector>
              <Cardtata4 style={{ width: "100%", minHeight: 90 }}>
                <ul className="tabs">
                  <li
                    data-tab-target="#categoryagalerie"
                    className="active tab"
                  >
                    Cadastrados
                  </li>
                  <li data-tab-target="#imagegalerie" className="tab">
                    Dados relacionados
                  </li>
                </ul>
              </Cardtata4>
            </CardSector>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Relatorios</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Você tem {inscritList?.length}
                    {inscritList?.length === 1
                      ? " publicação "
                      : " publicações "}
                    empresas no site
                  </p>

                  <CadbtnlongV2
                    type="button"
                    onClick={() => setOpenModal(true)}
                  >
                    {" "}
                    Adicionar novo{" "}
                  </CadbtnlongV2>
                </div>
                <div className="card">
                  <div className="table-responsive ps">
                    <table className="Tabele3s" id="">
                      <thead>
                        <tr>
                          <th>NOME</th>
                          <th>E-MAIL</th>
                          <th>CONTATO</th>
                          <th>ACTIONS</th>
                          <th className="text-center">Active</th>
                        </tr>
                      </thead>
                      <tbody>
                        {NewDatapost !== null && NewDatapost.length > 0 ? (
                          <React.Fragment>
                            {NewDatapost.map(function (item) {
                              return (
                                <tr key={`post-items-${item.id}`}>
                                  <td>
                                    <img
                                      className="ImgTd"
                                      width="50"
                                      src="/assets/email.jpg"
                                      alt="3sdigital"
                                    />
                                  </td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>{item.contact}</td>

                                  <td>
                                    <CadBoxBtn
                                      className="navbar-toggler"
                                      id={item.id}
                                    >
                                      <i className="fas fa-ellipsis-v"></i>+
                                    </CadBoxBtn>
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
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div className="ps__thumb-y"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="imagegalerie" data-tab-content>
                <h1>Adcionar algo nesse setor</h1>
                <h1 id="textTba"></h1>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>
              </div>
            </div>
          </Tbsfer>
        </div>
        <CardMaster viewSize="sizemd12">
          <>
            <span>2323232323</span>
            <h2>filtro</h2>
          </>
        </CardMaster>
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
          destination: "/acesso",
          permanet: false,
        },
      };
    }
    const { data: pageData } = await api.get("inscritos/lista");
    //const { data: pageData } = await api.get("galleryfefe/List");
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
