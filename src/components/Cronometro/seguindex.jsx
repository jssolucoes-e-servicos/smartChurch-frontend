import React, { useEffect, useState } from "react";

import {
  TestsSectorCronometro,
  CardTxt,
  SectorsTexts,
  DivSeahchimSelected,
  CustonSelects,
  CardHora,
} from "./styles";
import {
  SectorBtngeral,
  ButtonGeral,
  SectorBtnTable,
  CadBoxBtn,
  CadBoxBtnDelete,
} from "src/styles/stylesGlobal";

export default function Cronometros() {
  // State com os valores do cronômetro
  const [tempo, setTempo] = useState({
    stateHoras: 0,
    stateMinutos: 0,
    stateSegundos: 0,
  });
  // Definindo state para guardar o setInterval
  const [intervalo, setIntervalo] = useState();

  // Variáveis para serem atribuidas como valores para os states dos cronômetros
  let segundos = tempo.stateSegundos;
  let minutos = tempo.stateMinutos;
  let horas = tempo.stateHoras;

  // Função que increimenta e retorna os states atualizados
  const incrementa = () => {
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
    if (minutos === 60) {
      horas++;
      minutos = 0;
    }

    segundos++;
    return setTempo({
      stateHoras: horas,
      stateMinutos: minutos,
      stateSegundos: segundos,
    });
  };

  // Função responsável por rodar a função incrementa a cada 1segundo
  const iniciar = () => {
    setIntervalo(
      setInterval(() => {
        incrementa();
      }, 1)
    );
  };
  // Função responsvel por pausar o cronômetro
  const parar = () => {
    clearInterval(intervalo);
  };

  // Função responsável por zerar os valores do cronômetro
  const reiniciar = () => {
    setTempo({
      stateHoras: 0,
      stateMinutos: 0,
      stateSegundos: 0,
    });

    horas = minutos = segundos = 0;

    parar();
  };
  return (
    <React.Fragment>
      <TestsSectorCronometro>
        <CardTxt>
          <SectorsTexts>Cronometro de desenvolvedor</SectorsTexts>
          <div
            horas={tempo.stateHoras}
            minutos={tempo.stateMinutos}
            segundos={tempo.stateSegundos}
          />

          <button onClick={iniciar}>Iniciar</button>
          <button onClick={reiniciar}>Reiniciar</button>
          <button onClick={parar}>Parar</button>
        </CardTxt>
        <div>
          <CardHora>
            <p>
              {horas < 10 ? "0" + horas : horas}:
              {minutos < 10 ? "0" + minutos : minutos}:
              {segundos < 10 ? "0" + segundos : segundos}
            </p>
          </CardHora>

          {/* <SectorBtnTable>
            <SectorBtngeral>
              <ButtonGeral onClick={() => (setActive(true), StartRocke)}>
                Start
              </ButtonGeral>
            </SectorBtngeral>
            <CadBoxBtnDelete onClick={() => setActive(false)}>
              Pause Tempo
            </CadBoxBtnDelete>
            <CadBoxBtn onClick={clear}>Stop cronometro</CadBoxBtn>
          </SectorBtnTable> */}
        </div>
        {/* <CardHora>
          <p>
            {tempolocal.tempototal > 1
              ? "Tempo Utilizado = " +
                String(tempolocal.tempototal).padStart(2) +
                " minutos"
              : "Tempo Utilizado = " +
                "00:00:" +
                tempolocal.tempototal +
                " min"}
          </p>
        </CardHora>
        <SectorBtngeral>
          <ButtonGeral onClick={Salvar}> Salvar Local</ButtonGeral>
        </SectorBtngeral> */}
      </TestsSectorCronometro>
    </React.Fragment>
  );
}
