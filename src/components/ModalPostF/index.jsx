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
  id = "exemploInsert",
  postData = null,
  onClose = () => {},
}) {
  const { register, setValue, handleSubmit } = useForm();
  const HandleOutsideClick = (e) => {
    e.target.id === id && onClose();
  };

  useEffect(() => {
    if (postData !== null) {
      setValue("name", postData.name);
      setValue("title", postData.title);
      setValue("position", postData.position);
      setValue("urlimage", postData.urlimage);
      setValue("description", postData.description);
    }
  }, []);

  async function sendData(data) {
    try {
      if (postData !== null) {
        const { data: edit } = await api.put(
          `postgeral/update/${postData.id}`,
          data
        );
      } else {
        const { data: insert } = await api.post("postgeral/createPost", data);
      }
      if (postData !== null) {
        toast.success("cadastro realizado com sucesso!");
      } else {
        toast.success("cadastro alterado com sucesso!");
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
          <h2>Postagem Blog</h2>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </SectorBtnTtitles>

        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <DivisiondFlex>
            <Divisiond>
              <label>Nome da Imagem</label>
              <ContainerInt
                id="name"
                placeholder="Digite seu Nome"
                name="name"
                type="text"
                {...register("name", {
                  required: "O Nome ?? obrigat??rio",
                })}
              />
            </Divisiond>
            <Divisiond>
              <label>Nome da Titulo</label>
              <ContainerInt
                id="title"
                placeholder="Digite o Titulo da Post"
                name="title"
                type="text"
                {...register("title", {
                  required: "O Nome ?? obrigat??rio",
                })}
              />
            </Divisiond>
          </DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label htmlFor="username">Email</label>
              <ContainerInpSelect
                className="form-control form-control-lg"
                id="position"
                placeholder="posi????o "
                name="position"
                type="text"
                {...register("position", {
                  required: "A Posi????o ?? obrigat??ria",
                })}
                required
              >
                <option value="center">Centro</option>
                <option value="left">Direita</option>
              </ContainerInpSelect>
            </Divisiond>
            <Divisiond>
              <label>url da imagem</label>
              <ContainerInt
                type="text"
                id="urlimage"
                placeholder="Colocar url da imagem"
                name="urlimage"
                {...register("urlimage", {
                  required: "A Imagem ?? obrigat??ria",
                })}
              />
            </Divisiond>
          </DivisiondFlex>
          <DivisiondFlex>
            <Divisiond>
              <label>Descri????o do post</label>
              <ContainerInt
                rows="10"
                id="description"
                placeholder="Descri????o longa"
                name="description"
                type="text"
                {...register("description", {
                  required: "A Descri????o ?? obrigat??ria",
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
              <BtnData type="submit">Publicar Galeria</BtnData>
            </Divisiond>
          </DivisiondFlex>
        </form>
      </ContainerData>
    </ModalPosts>
  );
}
