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

export default function BlockRevenda() {
  const [totalTimeseguns, setTotalTimeseguns] = useState(2);
  const minutes = Math.floor(totalTimeseguns / 60);
  const second = totalTimeseguns % 60;
  useEffect(() => {
    if (totalTimeseguns === 0) {
      return;
    } else {
      setTimeout(() => {
        setTotalTimeseguns(totalTimeseguns - 1);
      }, 1000);
    }
  }, [totalTimeseguns]);

  // diego
  const date = new Date();
  //const day = moment(date, "DD-MM-YYYY", true).format();
  const day = date;

  const [horas, setHoras] = useState(0);
  const [customInterval, setCustomInterval] = useState({});
  const [tempolocal, setTempolocal] = useState({});
  const [active, setActive] = useState(false);
  //calculos
  const COUTDOW = 55 * 60;
  const [Amount, setAmount] = useState(COUTDOW);
  const [Hoursf, setHorsf] = useState(Amount / 60);
  const minutinhos = Math.floor(Amount / 60);
  //const minutinhos = Math.floor((Amount / 60) % 60);
  const segundinhos = Amount % 60;

  const horinhas = Math.floor(minutinhos / 60);
  //const horinhas = Math.floor((Amount * 60 * 60) % 24);
  useEffect(() => {
    StartRocke();
  }, [Amount, active]);

  const StartRocke = () => {
    setTimeout(() => {
      if (active === true) {
        setAmount((state) => state + 1);
      }
      if (minutinhos === 60) {
        minutinhos = 0;
        console.log("minutos", minutinhos);
        //setHorsf((state) => state + 1);
      }
    }, 10);
  };
  // console.log("minutos", minutinhos);
  console.log(Hoursf, "amount");

  const stopRock = () => {
    if (customInterval) {
      clearTimeout(customInterval);
    }
  };
  const clear = () => {
    //stopTimer();

    stopRock();
    setAmount(0);
    // setHoras(0);
  };
  //ceil ele arredonta o valor para + e floor para -
  async function Salvar() {
    const tempo = Amount;
    const tempototal = Math.floor(Amount / 60);
    const data = day;
    const key = key + 1;
    const contadores = {
      key,
      tempo,
      tempototal,
      data,
    };
    console.log(contadores, "contagem total");
    //const valores = Math.floor(contadores.tempo / 60);
    //console.log(valores, "dividido");
    // const mostrar = JSON.parse(contador);
    localStorage.setItem("@usuarioteste", JSON.stringify(contadores));
    const contadort = localStorage.getItem("@usuarioteste");
    console.log("fernando hora local ", contadort);

    //Alert.alert("dados", `NOme: ${mostrar.tempo} - Data: ${mostrar.data}`);
  }

  useEffect(() => {
    async function loadUserC() {
      const taskHores = localStorage.getItem("@tempoinserir");
      if (taskHores) {
        setTempolocal(JSON.parse(taskHores));
      }
      console.log(taskHores);
    }

    loadUserC();
  }, []);
  useEffect(() => {
    console.log("Contadores", tempolocal.tempototal);
  }, [tempolocal]);

  // const [value, setValue] = React.useState("");
  // const onChange = (event) => {
  //   localStorage.setItem("myValueInLocalStorage", event.target.value);

  //   setValue(event.target.value);
  // };

  const [tempo, setTempo] = useState({
    stateHoras: 0,
    stateMinutos: 45,
    stateSegundos: 0,
  });

  const [intervalo, setIntervalo] = useState();
  let segundos = tempo.stateSegundos;
  let minutos = tempo.stateMinutos;
  let horasdev = tempo.stateHoras;

  const incrementa = () => {
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
    if (minutos === 60) {
      horasdev++;
      minutos = 0;
    }
    segundos++;
    return setTempo({
      stateHoras: horasdev,
      stateMinutos: minutos,
      stateSegundos: segundos,
    });
  };

  const [tempomax, setTempomax] = useState(tempo);
  async function Salvardados() {
    const horas = tempo.stateHoras;
    const minutos = tempo.stateMinutos;
    const tempototal =
      "horas " + horas.toString() + ":" + minutos.toString() + " minutos";
    const key = key + 1;
    const vai = {
      key,
      horas,
      minutos,
      tempototal,
    };
    localStorage.setItem("@tempoinserir", JSON.stringify(vai));
    const final = localStorage.getItem("@tempoinserir");
    console.log("tempo result ", final);
  }

  const iniciar = () => {
    setIntervalo(
      setInterval(() => {
        incrementa();
      }, 10)
    );
  };
  // Função responsvel por pausar o cronômetro
  const parar = () => {
    clearInterval(intervalo);
    setTempomax();
    Salvardados();
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
  console.log(tempomax, "tempo final ser inserido");
  console.log(tempo, "tempos é tempo");
  return (
    <React.Fragment>
      <TestsSectorCronometro>
        <div>
          <div>
            <div>
              <h1>Hello React with Local Storage!</h1>
            </div>
            <p>
              {tempolocal.horas > 1
                ? "Tempo de projeto " + tempolocal.horas
                : "Tempo de projeto : " + tempolocal.horas}
              {tempolocal.minutos > 1
                ? " " + String(tempolocal.minutos).padStart(2) + " minutos"
                : "Tempo Utilizado = " + "00:00:" + tempolocal.minutos + " min"}
            </p>
            <span>
              {tempolocal.tempototal > 1
                ? "Tempo de projeto " + tempolocal.tempototal
                : "Tempo de projeto : " + tempolocal.tempototal}
            </span>
          </div>
        </div>
        <div>
          <CardHora>
            <p>
              {horasdev < 10 ? "0" + horasdev : horasdev}:
              {minutos < 10 ? "0" + minutos : minutos}:
              {segundos < 10 ? "0" + segundos : segundos}
            </p>
          </CardHora>
        </div>
        <SectorBtngeral onClick={iniciar}>
          <ButtonGeral> + Start</ButtonGeral>
        </SectorBtngeral>
        <br />
        <SectorBtnTable>
          <CadBoxBtn onClick={parar}>Stop cronometro</CadBoxBtn>
          <CadBoxBtnDelete onClick={reiniciar}>Finalizar Tempo</CadBoxBtnDelete>
        </SectorBtnTable>{" "}
        <br />
      </TestsSectorCronometro>
    </React.Fragment>
  );
}
