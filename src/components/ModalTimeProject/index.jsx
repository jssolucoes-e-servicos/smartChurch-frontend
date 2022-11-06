import React, { useEffect, useState } from "react";
import api from "src/services/api";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  ModalPosts,
  ContainerData,
  SectorBtnTtitles,
  DivisiondFlex,
  Divisiond,
  ContainerInt,
  ContainerInpSelect,
  ContainerInpTextArea,
  BtnData,
  BtnDataClose,
} from "./styles";
export default function TimerProject({
  id = "inserTimer",
  desenv = null,
  project = null,
  postData = null,
  onClose = () => {},
}) {
  const { register, setValue, handleSubmit } = useForm();
  const [projectSelected, setProjectSelected] = useState(null);
  const [starttimer, setTimers] = useState(postData.starttime);
  useEffect(() => {
    const getProject = () => {
      if (project !== null) {
        project.map(function (projitem) {
          if (projitem.id === postData.projectId) {
            setProjectSelected(projitem);
          }
        });
      }
    };
    getProject();
  }, []);
  console.log(starttimer, "estou aqui");
  const dataatual = new Date();
  const datapassada = new Date("2022-06-01 18:00:00");
  var dataMilessegundo = Math.abs(dataatual.getTime() - datapassada.getTime());
  var duasdediferente = Math.ceil(dataMilessegundo / (1000 * 60 * 60 * 24));
  var horas = duasdediferente * 24;
  console.log(dataatual, "a diferenca é ", duasdediferente + "Horas", horas);

  const testehora = format(new Date(), "yyy-MM-dd hh:mm:ss");
  console.log(testehora, "nova formato");
  //data imput
  const stringDate = "2022-09-29 08:00:00";
  var data = new Date(stringDate);
  // animacao
  const HandleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  console.log(projectSelected, "1 data animal");
  console.log(desenv, "dados da pagina");
  useEffect(() => {
    if (postData !== null) {
      setValue("description", postData.description);
      setValue("developerId", postData.developerId);
      setValue("starttime", postData.starttime);
      setValue("projectId ", postData.projectId);
    }
  }, []);

  async function sendData(data) {
    try {
      if (postData !== null) {
        const { data: edit } = await api.put(
          `/galery/updateTimes/${postData.id}`,
          data
        );
      } else {
        const { data: insert } = await api.post("galery/Createtimer", data);
      }
      if (postData !== null) {
        toast.info("sei la");
      } else {
        toast.success("menos ainda!");
      }
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <ModalPosts id={id} onClick={HandleOutsideClick}>
      <ContainerData>
        <SectorBtnTtitles>
          <h2>Start horas</h2>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </SectorBtnTtitles>

        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <DivisiondFlex>
            <Divisiond>
              <label>Desenvolvedores</label>
              <ContainerInpSelect
                className="form-control form-control-lg"
                id="developerId"
                placeholder="dev "
                name="developerId"
                type="text"
                value={desenv.id}
                readonly
                disabled
              >
                {desenv !== null &&
                  desenv.map(function (devitem) {
                    return (
                      <>
                        <option value={devitem.id}>{devitem.name}</option>
                      </>
                    );
                  })}
              </ContainerInpSelect>
            </Divisiond>
          </DivisiondFlex>

          <DivisiondFlex>
            <Divisiond>
              <label htmlFor="username">Data inicial</label>
              <ContainerInt
                className="form-control form-control-lg"
                id="starttime"
                placeholder="date inicial"
                name="starttime"
                type="text"
                value={postData.starttime}
                readonly
                disabled
              />
            </Divisiond>
          </DivisiondFlex>
          <DivisiondFlex>
            {/* <Divisiond>
              <label htmlFor="username">Data Final</label>
              <ContainerInt
                className="form-control form-control-lg"
                id="stoptime"
                placeholder="date inicial "
                name="stoptime"
                value={data}
                type="text"
                {...register("stoptime", {
                  required: "A hora de inicio  *obrigatória",
                })}
                required
              />
            </Divisiond> */}
          </DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label>Descrição projeto</label>
              <ContainerInt
                rows="10"
                id="description"
                placeholder="Descrição longa"
                name="description"
                type="text"
                {...register("description", {
                  required: "A Descrição do projeto ( não  obrigatória)",
                })}
              />
            </Divisiond>
          </DivisiondFlex>
          {/* <Divisiond>
            <label>Projeto</label>
            <ContainerInt
              className="form-control form-control-lg"
              type="text"
              value={projectSelected?.name}
              readOnly
            />
          </Divisiond> */}

          <DivisiondFlex>
            <Divisiond>
              <ContainerInpTextArea> text</ContainerInpTextArea>
            </Divisiond>
          </DivisiondFlex>

          <DivisiondFlex>
            <Divisiond>
              <BtnDataClose type="button" onClick={onClose}>
                cancelar
              </BtnDataClose>
            </Divisiond>
            <Divisiond>
              <BtnData type="submit">Play timer</BtnData>
            </Divisiond>
          </DivisiondFlex>
        </form>
      </ContainerData>
    </ModalPosts>
  );
}
