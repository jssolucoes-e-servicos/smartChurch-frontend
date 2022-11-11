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

export default function ModalNewBaptized({
  id = "exemploInsert",
  data = null,
  onClose = () => { },
  onInsert = () => { }
}) {
  const { register, setValue, handleSubmit } = useForm();
  const HandleOutsideClick = (e) => {
    e.target.id === id && onClose();
  };

  async function sendData(data) {
    try {

      onInsert();
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <ModalPosts id={id} onClick={HandleOutsideClick}>
      <ContainerData>
        <SectorBtnTtitles>
          <span>Adicionar novo batizado</span>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </SectorBtnTtitles>

        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <DivisiondFlex>
            <Divisiond>
              <label>Nome</label>
              <ContainerInt
                id="name"
                placeholder="Digite o nome do novo batizado"
                name="name"
                type="text"
                {...register("name", {
                  required: "O Nome é obrigatório",
                })}
              />
            </Divisiond>

          </DivisiondFlex>
          <DivisiondFlex></DivisiondFlex>
          <DivisiondFlex>

            <Divisiond>
              <label>Célula</label>
              <ContainerInpSelect
                className="form-control form-control-lg"
                id="celula"
                name="celula"
                required
                {...register("cellId", {
                  required: "Selecione uma célula"
                })}
              >
                {data?.map(opt => {
                  return (
                    <option key={`form-insert-cell-${opt.id}`} value={opt.id}>
                      {opt.name} - {opt.leader.name}
                    </option>
                  )

                })}
              </ContainerInpSelect>
            </Divisiond>
          </DivisiondFlex>

          <SectorBtn>
            <BtnDataCloseBtn onClick={onClose}>cancelar</BtnDataCloseBtn>

            <BtnData type="submit">Cadastrar</BtnData>
          </SectorBtn>
        </form>
      </ContainerData>
    </ModalPosts>
  );
}
