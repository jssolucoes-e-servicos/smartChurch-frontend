import React, { useEffect, useState } from "react";

import {
  TestsSectorRevenda,
  CardTxt,
  SectorsTexts,
  DroSeletsF,
  DivSeahchimSelected,
  CustonSelects,
  SelectsOptions,
  SectorSwitch,
  RepresentContainer,
  Representas,
  StadoTitle,
  TitleStates,
  RepresentData,
  DataForm,
  RepresentaTitle,
  RepresentaEstado,
} from "./styles";

export default function BlockRevenda() {
  const [filter, setFilter] = useState();
  const [dadofake, setDadoFake] = useState([
    {
      id: 0,
      title: "Categoria",
      categories: [
        {
          id: 1,
          name: "Alimentos",
        },
        {
          id: 2,
          name: "Automóvel",
        },
        {
          id: 3,
          name: "Cozinha",
        },
        ,
        {
          id: 4,
          name: "Garagem/Áreas externas",
        },
        ,
        {
          id: 5,
          name: "Grelha de churrasco",
        },
      ],
    },
    {
      id: 1,
      title: "setor",
      region: [
        {
          id: 1,
          name: "Água sanitária",
        },
        {
          id: 2,
          name: "Álcool",
        },
        {
          id: 3,
          name: "Detergente",
        },
        ,
        {
          id: 4,
          name: "Sabão em barra/pó",
        },
        ,
        {
          id: 5,
          name: "Gel para pneu",
        },
      ],
    },
  ]);

  // console.log(dadofake);

  function Onrevende() {
    const ChecBox = document.getElementById("switcher").checked;
    console.log(ChecBox);
    const dados = document.getElementById("styledSelect2").value;

    if (ChecBox == false) {
      if (dados == 1) {
        const filtered = dadofake[0].categories.find(
          (item) => item.nome === "Nordeste"
        );
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == 2) {
        const filtered = dadofake[0].categories.find(
          (item) => item.nome === "Sudeste"
        );
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == 3) {
        const filtered = dadofake[0].categories.find(
          (item) => item.name === "Sul"
        );
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == "" && dados == null) {
        console.log("dados não encontrado");
      } else {
        console.log("Sem filtro");
      }
    } else if (ChecBox == true) {
      if (dados == 1) {
        const filtered = dadofake[1].region.find(
          (item) => item.nome === "Nordeste"
        );
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == 2) {
        const filtered = dadofake[1].region.find(
          (item) => item.nome === "Sudeste"
        );
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == 3) {
        const filtered = dadofake[1].region.find((item) => item.nome === "Sul");
        console.log("filteredddd", filtered);
        setFilter(filtered);
      } else if (dados == "" && dados == null) {
        console.log("dados não encontrado do true");
      } else {
        console.log("Sem filtro");
      }
    }

    //console.log(dados, "dados");
  }

  //console.log("filter", filter);

  return (
    <React.Fragment>
      <TestsSectorRevenda>
        <CardTxt>
          <SectorsTexts>Encontre um Vendedor ou Representante</SectorsTexts>
        </CardTxt>
        <SectorSwitch>
          <span className="switch">
            <input type="checkbox" id="switcher" />
            <label htmlFor="switcher"></label>
          </span>
        </SectorSwitch>

        <DivSeahchimSelected>
          <CustonSelects htmlFor="styledSelect2">
            <DroSeletsF
              name="options2"
              id="styledSelect2"
              onClick={() => {
                Onrevende();
              }}
            >
              <SelectsOptions desable>Escolha uma cidade</SelectsOptions>
              {dadofake[0].categories ? (
                dadofake[0].categories.map((item) => (
                  <>
                    <SelectsOptions value="2">{item.name}</SelectsOptions>
                  </>
                ))
              ) : (
                <span>nenhum dado encontrado</span>
              )}
              {/* <SelectsOptions value="1">Nordeste</SelectsOptions>
              <SelectsOptions value="2">Sudeste</SelectsOptions>
              <SelectsOptions value="3">Sul</SelectsOptions> */}
            </DroSeletsF>
          </CustonSelects>
        </DivSeahchimSelected>

        <DivSeahchimSelected>
          <CustonSelects htmlFor="styledSelect3">
            <DroSeletsF
              name="options3"
              id="styledSelect3"
              onClick={() => {
                Onrevende();
              }}
            >
              <SelectsOptions desable>Escolha uma Departamento</SelectsOptions>
              <SelectsOptions value="1">São Paulo</SelectsOptions>
              <SelectsOptions value="2">Campinas</SelectsOptions>
              <SelectsOptions value="3">Araras</SelectsOptions>
            </DroSeletsF>
          </CustonSelects>
        </DivSeahchimSelected>

        {/* <Representas id="boxRepresentante"> */}
        {/* <RepresentContainer>
          {filter ? (
            filter.contact.map((item) => (
              <Representas id="boxRepresentante">
                <StadoTitle>
                  <TitleStates>{item.estado}</TitleStates>
                </StadoTitle>

                <RepresentData>
                  <DataForm>
                    <RepresentaTitle>{item.name} </RepresentaTitle>
                    <RepresentaEstado>{item.office} </RepresentaEstado>
                  </DataForm>
                  <DataForm>
                    <RepresentaTitle>
                      <span id="Nufe">{"(" + item.phone_ddd + ") "}</span>
                      <strong> {item.phone_numnber}</strong>
                    </RepresentaTitle>
                    <RepresentaEstado>
                      <strong> {item.email}</strong>
                    </RepresentaEstado>
                  </DataForm>
                  <DataForm>
                    <RepresentaTitle> Estado:</RepresentaTitle>
                    <RepresentaEstado>
                      {item.states.map(function (obj) {
                        return <span>{obj} |</span>;
                      })}
                    </RepresentaEstado>
                  </DataForm>
                </RepresentData>
              </Representas>
            ))
          ) : (
            <span>nenhum dado encontrado</span>
          )}
        </RepresentContainer> */}
      </TestsSectorRevenda>
    </React.Fragment>
  );
}

{
  /* {filter != null &&
            filter.contact.map(function (item) {
              return (
                <div id={item.id} key={item.id}>
                  <span>{item.estado}</span>
                  <span>{item.title}</span>
                  <span>{item.title}</span>
                </div>
              );
            })} */
}
