import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import BlocEncontrar from "src/Components/BlockRevenda";
import { CadBox, SectorBtngeral, ButtonGeral } from "src/styles/stylesGlobal";
import Tbsfer from "src/Components/TabBar";

import { GrClose } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import CardMaster from "src/Components/CardMaster";
import {
  CardSector,
  SectorBtnTable,
  CadBoxBtn,
  CadBoxBtnDelete,
  CadBoxBtnTransparent,
} from "src/styles/stylesGlobal";
import CronometroDev from "src/Components/Cronometro";
export default function Teste({ userData, pageData = null }) {
  const [inscritList, setPostsList] = useState(pageData.inscrits);
  const [subcategories, setSubcategories] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [subdatas, setdatas] = useState(null);
  //console.log(inscritList, " fefe");
  // const isAlimento = (inscritList) => inscritList.categoria === "banheiro";
  // const alimentos = inscritList.filter(isAlimento);
  //console.log(alimentos);
  const [sending, setSending] = useState(false);
  const [terms, setTerms] = useState(false);
  const handleFilter = (category) => {
    const filteredByName = dadofake.filter((item) =>
      item.name.toLowerCase().includes(category.toLowerCase())
    );

    setCategory(category);
    setSubcategories(filteredByName[0].subcategoria);

    if (category !== undefined || category !== null) {
      setTerms(true);
      toast.error("ativou");
      console.log(terms, "ativou");
    } else {
      setTerms(false);
      Messa();
    }
  };
  function Messa() {
    toast.error("Selecione uma categoria para ter acessar!");
  }
  //console.log("category", category, "subcategory", subcategory);

  const [dadofake, setDadoFake] = useState([
    {
      id: 1,
      name: "Alimentos",
      subcategoria: [
        {
          id: 1,
          nome: "Água sanitária",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
            {
              id: 2,
              name: "Açucar",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          nome: "Álcool",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          nome: "banheiro",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Automóvel",
      subcategoria: [
        {
          id: 1,
          nome: "lataria",
          produto: [
            {
              id: 1,
              name: "Álcool lataria",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
            {
              id: 1,
              name: "Álcool vidro",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          nome: "Gel para pneu",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          nome: "Detergente",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image: "#",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  descr1:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr2:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                  descr3:
                    " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Cozinha",
    },
    {
      id: 4,
      name: "Garagem/Áreas externas",
    },
    {
      id: 5,
      name: "Grelha de churrasco",
    },
  ]);
  //console.clear();
  console.log(terms, "terms");
  console.log(dadofake);
  console.log("subcategories", subcategories);
  const [teste, setTeste] = useState(false);
  return (
    <AppLayout userData={userData}>
      <CadBox>
        <div>
          <button
            onClick={() => {
              setTeste(!teste);
            }}
          >
            {" "}
            {teste === true ? "ligado" : "desligado"}
          </button>
          <h2>galeries</h2>
        </div>
        <div>
          <CardMaster viewSize="sizemd12">
            {/* bloco onde encontrar */}
            {/* <BlocEncontrar /> */}
          </CardMaster>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Inscritos no site
              </li>
              <li data-tab-target="#imagegalerie" className="tab">
                Dados Inscritos
              </li>
            </ul>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Relatorios</h1>

                <p>
                  Você tem {inscritList?.length}
                  {inscritList?.length === 1 ? " publicação " : " publicações "}
                  empresas no site
                </p>

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
                        {inscritList !== null && inscritList.length > 0 ? (
                          <React.Fragment>
                            {inscritList.map(function (item) {
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
                                      <i className="fas fa-ellipsis-v"></i>s
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
                <h1>Galeria</h1>
                <h1 id="textTba"></h1>
                <p>
                  Você tem {inscritList?.length}
                  {inscritList?.length === 1
                    ? " publicação "
                    : " publicações "}{" "}
                  imagens na galeria do site
                </p>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>
              </div>
            </div>
          </Tbsfer>
        </div>
        <CardMaster viewSize="sizemd12">
          <h2>filtro</h2>
          <div>
            <>
              <select
                style={{ width: "300px", height: 60, color: "#fff" }}
                id="category"
                onChange={(event) => handleFilter(event.target.value)}
              >
                <option>--Selecione Categoria--</option>
                {dadofake != null &&
                  dadofake.map(function (obj) {
                    return (
                      <>
                        <option value={obj.name}>{obj.name}</option>
                      </>
                    );
                  })}
              </select>

              <select
                onChange={(event) => setSubcategory(event.target.value)}
                id="subcategory"
                style={{
                  width: "300px",
                  height: 60,
                  color: "#fff",
                  marginLeft: 20,
                }}
              >
                <option>--Selecione onde limpar--</option>
                {subcategories
                  ? subcategories.map((item) => {
                      return (
                        <option key={item.id} value={item.nome}>
                          {item.nome}
                        </option>
                      );
                    })
                  : null}
              </select>
            </>
            {terms === false ? (
              <>
                <p>trava de segurança</p>
                <ButtonGeral onClick={Messa}>Pesquisa bloqueada</ButtonGeral>
              </>
            ) : (
              <>
                <p>Liberado para pesquisa</p>
                <SectorBtngeral>
                  {category === undefined || subcategory === undefined ? (
                    <ButtonGeral>Selecione uma opção</ButtonGeral>
                  ) : (
                    <Link
                      href={`/app/inscrition/v?categorie=${category}&subcategory=${subcategory}`}
                    >
                      <ButtonGeral>Pesquisar dados</ButtonGeral>
                    </Link>
                  )}
                </SectorBtngeral>
              </>
            )}
          </div>
        </CardMaster>
        <CardMaster viewSize="sizemd12">
          <CronometroDev />
        </CardMaster>
      </CadBox>
    </AppLayout>
  );
}

import { parseCookies } from "nookies";
import Link from "node_modules/next/link";

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
