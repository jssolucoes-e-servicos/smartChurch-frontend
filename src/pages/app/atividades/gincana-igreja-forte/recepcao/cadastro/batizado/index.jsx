import React, { useState, useEffect, useContext, useMemo } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import AppLayout from "~/templates/AppLayout";
import api from "~/services/api";
import ModalNewBaptized from "~/components/Modals/NewVisitorBaptized";
import ChurchContext from "~/contexts/churchContext";
import {
  CadBox,
  FilterName,
  FilterIpt,
  SelectedFilter,
  Cardtata4,
} from "~/styles/stylesGlobal";
import Tbsfer from "~/partials/TabBar";
import CardMaster from "~/components/CardMaster";
import { CardSector, CadbtnlongV2, CadBoxBtn } from "~/styles/stylesGlobal";



export default function PageComponent({ userData, apiData = null }) {
  const { setLoad, setOpenModal, openModal } = useContext(ChurchContext);
  const [visitors, setVisitors] = useState(apiData.visitors);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    console.log('reload')
  }, []);

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);



  const onClose = async () => {
    setOpenModal(false);
  };

  const onInsert = async () => {
    if (openModal == true) {
      setOpenModal(false);
      await getData();
    }

  }

  const getData = async () => {
    try {
      setLoad(true);
      setVisitors(null);
      const { data } = await api.get('visitors-baptizeds/');
      setVisitors(data);
    } catch (error) {
      console.error(error);
      toast.error(error.response.message)
    } finally {
      setLoad(false);
    }

  }




  return (
    <AppLayout userData={userData}>
      {openModal === true && (
        <ModalNewBaptized onClose={onClose} onInsert={onInsert} data={apiData.cells} />
      )}

      <CadBox>
        <div>
          <h2>Gincana Igreja Forte  - Batizados</h2>
        </div>
        <CadbtnlongV2
          type="button"
          onClick={() => setOpenModal(true)}
        >Novo batizado
        </CadbtnlongV2>
        <div>
          <CardMaster viewSize="sizemd12">
            Pesquisar
            <FilterName>
              <FilterIpt
                value={busca}
                name="1"
                onChange={(e) => {
                  setBusca(e.target.value);
                }}
                placeholder="Digite para pesquisar..."
              />
            </FilterName>
          </CardMaster>
          <Tbsfer>


            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Lista de Batizados</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Total de Pessoas Batizadas: <b>{visitors?.length}</b>
                  </p>


                </div>
                <div className="card">
                  <div className="table-responsive ps">
                    <table className="Tabele3s" id="">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Telefone</th>
                          <th>Célula</th>
                          <th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visitors !== null && visitors.length > 0 ? (
                          <React.Fragment>
                            {visitors.map(function (item) {

                              return (
                                <tr key={`post-items-${item.id}`}>
                                  <td>{item.name}</td>
                                  <td>{item.phone?.length > 0 ? item.phone : '<< Não Informado >>'}</td>
                                  <td>{item.cell?.name ? item.cell.name : '<< Não Informado >>'}</td>
                                  <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
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

            </div>
          </Tbsfer>
        </div>
      </CadBox>
    </AppLayout>
  );
}
import { destroyCookie, parseCookies } from "nookies";

export const getServerSideProps = async (ctx) => {
  try {
    /* let { "smc.profile": profile, theme: banana } = parseCookies(ctx); */
    const { data: userData } = await api.get('users/6368182d8a3d19f9ad272ee2');
    const { data: visitorsData } = await api.get('visitors-baptizeds');
    const { data: cellsData } = await api.get('cells');
    /* 
        if (!profile) {
          return {
            redirect: {
              destination: "/acesso",
              permanet: false,
            },
          };
        } */

    return {
      props: {
        userData, //JSON.parse(profile),
        apiData: {
          visitors: visitorsData,
          cells: cellsData
        }
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        userData: null,
      },
    };
  }
};
