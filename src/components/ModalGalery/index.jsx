import React, { useEffect, useState } from "react";
import api from "src/services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  ModalPostegalerie,
  ContainerDataM,
  Divisiond,
  ContainerInt,
  BtnData,
  BtnDataClose,
} from "./styles";
export default function ModalGalerie({
  cate,
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
      setValue("title", postData.title);
      setValue("id_workgallery", postData.id_workgallery);
      setValue("image", postData.image);
      setValue("grid", postData.grid);
      setValue("categorie", postData.categorie);
    }
  }, []);

  async function sendData(data) {
    try {
      if (postData !== null) {
        const { data: edit } = await api.put(
          `ImgGalery/update/${postData.id}`,
          data
        );
      } else {
        const { data: insert } = await api.post("ImgGalery/forgalerry", data);
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
    <ModalPostegalerie id={id} onClick={HandleOutsideClick}>
      <ContainerDataM>
        <>
          <h5 className="modal-title" id="exampleModalLabel">
            Alterar Galeria
          </h5>
          <BtnDataClose type="button" onClick={onClose}>
            X
          </BtnDataClose>
        </>
        <form onSubmit={handleSubmit(sendData)} encType="multipart/form-data">
          <Divisiond>
            <label>Nome da Imagem</label>
            <ContainerInt
              id="title"
              placeholder="Digite seu Nome"
              name="title"
              type="text"
              {...register("title", {
                required: "O Nome é obrigatório",
              })}
            />
          </Divisiond>
          <Divisiond>
            <label>Id categoria</label>
            <ContainerInt
              id="id_workgallery"
              placeholder="Digite Id categoria"
              name="id_workgallery"
              type="number"
              {...register("id_workgallery", {
                required: "O Nome é obrigatório",
              })}
            />
          </Divisiond>

          <Divisiond>
            <label>Posição do Categoria</label>
            <select
              className="form-control form-control-lg"
              id="categorie"
              placeholder="categorie "
              name="categorie"
              type="text"
              {...register("categorie", {
                required: "A Posição é obrigatória",
              })}
              required
            >
              {/* {cate !== null &&
                cate.map(function (item) {
                  return (
                    <>
                      <option value={item.title}>{item.title}</option>
                    </>
                  );
                })} */}
            </select>
          </Divisiond>
          <Divisiond>
            <label htmlFor="username">Email</label>
            <select
              className="form-control form-control-lg"
              id="grid"
              placeholder="grid "
              name="grid"
              type="text"
              {...register("grid", {
                required: "A Posição é obrigatória",
              })}
              required
            >
              <option value="center">Centro</option>
              <option value="left">Direita</option>
            </select>
          </Divisiond>

          <Divisiond>
            <label>url da imagem</label>
            <ContainerInt
              type="text"
              id="image"
              placeholder="Colocar url da imagem"
              name="image"
              {...register("image", {
                required: "A Imagem é obrigatória",
              })}
            />
          </Divisiond>

          <Divisiond>
            <BtnData type="submit">Publicar Galeria</BtnData>
          </Divisiond>
          <Divisiond>
            <BtnDataClose type="button" onClick={onClose}>
              cancelar
            </BtnDataClose>
          </Divisiond>
        </form>
      </ContainerDataM>
    </ModalPostegalerie>
  );
}
