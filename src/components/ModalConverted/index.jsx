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
  SectorBtn,
  BtnDataCloseBtn,
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
    }
  }, []);

  async function sendData(data) {
    try {
      if (postData !== null) {
      } else {
        const { data: insert } = await api.post("rota", data);
      }
      if (postData !== null) {
        toast.info("Visitante alterado com sucesso!");
      } else {
        toast.success("Pagamento cadastrado com sucesso!");
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
          <span>Adicionar novo convertido</span>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </SectorBtnTtitles>

        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <DivisiondFlex>
            <Divisiond>
              <label>Nome membro</label>
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
              <label>Contato</label>
              <ContainerInt
                type="number"
                id="contact"
                placeholder="contato"
                name="price"
                {...register("contact", {
                  required: "O contato é obrigatória",
                })}
              />
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
              <label>Setor Celulas</label>
              <ContainerInpSelect
                className="form-control form-control-lg"
                id="celula"
                placeholder="Celula "
                name="celula"
                type="text"
                required
              >
                <>
                  <option value="1">Celula 1</option>
                  <option value="2">Celula 2</option>
                  <option value="3">Celula 3</option>
                </>
              </ContainerInpSelect>
            </Divisiond>
          </DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label>Descrição inicial</label>
              <ContainerInt
                rows="10"
                id="project"
                placeholder="Descrição inicial"
                name="description"
                type="text"
                {...register("project", {
                  required: "A Descrição do projeto é obrigatória",
                })}
              />
            </Divisiond>
          </DivisiondFlex>

          <DivisiondFlex>
            <Divisiond>
              <label>Descrição Longa</label>
              <ContainerInpTextArea
                name="description"
                placeholder="Descrição longa"
              ></ContainerInpTextArea>
            </Divisiond>
          </DivisiondFlex>

          <SectorBtn>
            <BtnDataCloseBtn onClick={onClose}>cancelar</BtnDataCloseBtn>

            <BtnData type="submit">Cadastrar novo</BtnData>
          </SectorBtn>
        </form>
      </ContainerData>
    </ModalPosts>
  );
}
