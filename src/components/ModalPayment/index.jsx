import React, { useEffect, useState } from "react";
import api from "src/services/api";
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
export default function ModalPostF({
  desenv = null,
  id = "exemploInsert",
  postData = null,
  onClose = () => {},
}) {
  const { register, setValue, handleSubmit } = useForm();
  const HandleOutsideClick = (e) => {
    e.target.id === id && onClose();
  };
  console.log(desenv, "dados da pagina");
  useEffect(() => {
    if (postData !== null) {
      setValue("name", postData.name);
      setValue("developerId", postData.developerId);
      setValue("dateordem", postData.dateordem);
      setValue("price", postData.price);
      setValue("project", postData.project);
    }
  }, []);

  async function sendData(data) {
    try {
      if (postData !== null) {
        // const { data: edit } = await api.put(
        //   `postgeral/update/${postData.id}`,
        //   data
        // );
      } else {
        const { data: insert } = await api.post("Dev/createpayment", data);
      }
      if (postData !== null) {
        toast.info("Pagamento alterado com sucesso!");
      } else {
        toast.success("Pagamento realizado com sucesso!");
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
          <h2>Pagemento desenvolvedor</h2>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </SectorBtnTtitles>

        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <DivisiondFlex>
            <Divisiond>
              <label>Nome desenvolvedor</label>
              <ContainerInt
                id="name"
                placeholder="Digite Nome"
                name="name"
                type="text"
                {...register("name", {
                  required: "O Nome é obrigatório",
                })}
              />
            </Divisiond>
            <Divisiond>
              <label>Desenvolvedores</label>
              <ContainerInpSelect
                className="form-control form-control-lg"
                id="developerId"
                placeholder="dev "
                name="developerId"
                type="text"
                value={desenv.id}
                {...register("developerId", {
                  required: "Desenvolvedor é obrigatória",
                })}
                required
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
          <DivisiondFlex></DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label htmlFor="username">Data ordem</label>
              <ContainerInt
                className="form-control form-control-lg"
                id="dateordem"
                placeholder="date ordem "
                name="dateordem"
                type="date"
                {...register("dateordem", {
                  required: "A data de pagamento é obrigatória",
                })}
                required
              />
            </Divisiond>
            <Divisiond>
              <label>Valor pago</label>
              <ContainerInt
                type="number"
                id="price"
                placeholder="Colocar valor pago"
                name="price"
                {...register("price", {
                  required: "O valor é obrigatória",
                })}
              />
            </Divisiond>
          </DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label>Descrição projeto</label>
              <ContainerInt
                rows="10"
                id="project"
                placeholder="Descrição longa"
                name="project"
                type="text"
                {...register("project", {
                  required: "A Descrição do projeto é obrigatória",
                })}
              />
            </Divisiond>
          </DivisiondFlex>

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
              <BtnData type="submit">Publicar pagamento</BtnData>
            </Divisiond>
          </DivisiondFlex>
        </form>
      </ContainerData>
    </ModalPosts>
  );
}
