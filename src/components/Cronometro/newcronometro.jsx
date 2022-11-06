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
  const date = new Date();
  var hh = 0;
  var mm = 0;
  var ss = 0;
  var tempo = 10; //Quantos milésimos valem 1 segundo?
  var cron;
  var banana = 0;
  //Inicia o temporizador
  function start() {
    cron = setInterval(() => {
      timer();
    }, tempo);
  }

  //Para o temporizador mas não limpa as variáveis
  function pause() {
    clearInterval(cron);
  }

  //Para o temporizador e limpa as variáveis
  function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("counter").innerText = "00:00:00";
    SalvarStorage();
  }
  //Faz a contagem do tempo e exibição
  function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) {
      //Verifica se deu 59 segundos
      ss = 0; //Volta os segundos para 0
      mm++; //Adiciona +1 na variável mm

      if (mm == 59) {
        //Verifica se deu 59 minutos
        mm = 0; //Volta os minutos para 0
        hh++; //Adiciona +1 na variável hora
      }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format =
      (hh < 10 ? "0" + hh : hh) +
      ":" +
      (mm < 10 ? "0" + mm : mm) +
      ":" +
      (ss < 10 ? "0" + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById("counter").innerText = format;
    //Retorna o valor tratado
    banana = format;
    return format;
  }

  console.log("tempo real", banana);

  async function SalvarStorage() {
    const tempo = banana;
    const data = date;
    const tempodiario = {
      tempo,
      data,
    };
    console.log(tempodiario, "contagem total");
    await localStorage.setItem("@resultGeral", JSON.stringify(tempodiario));
    const result = await localStorage.getItem("@resultGeral");
    console.log("tempo gasto ", result);

    //Alert.alert("dados", `NOme: ${mostrar.tempo} - Data: ${mostrar.data}`);
  }

  return (
    <React.Fragment>
      <TestsSectorCronometro>
        <CardTxt>
          <SectorsTexts>Cronometro de desenvolvedor</SectorsTexts>
        </CardTxt>
        <div>
          <CardHora>
            <h1 id="counter">00:00:00</h1>
            {/* 6,20 */}
          </CardHora>
        </div>
        <SectorBtngeral onClick={start}>
          <ButtonGeral> + Start fefe</ButtonGeral>
        </SectorBtngeral>
        <br />
        <SectorBtnTable>
          <CadBoxBtn onClick={pause}>Stop cronometro</CadBoxBtn>
          <CadBoxBtnDelete onClick={stop}>Finalizar Tempo</CadBoxBtnDelete>
        </SectorBtnTable>
      </TestsSectorCronometro>
    </React.Fragment>
  );
}
