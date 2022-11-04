import React, { useState, useEffect } from "react";
import api from "src/services/api";
import { toast } from "react-toastify";
import {
  ModalPostDelete,
  ContainerDataM,
  Divisiond,
  ContainerInt,
  BtnData,
  BtnDataClose,
} from "./styles";
export default function ModalDelete({
  idmodel = "ModalDelet",
  table,
  id,
  onClose = () => {},
}) {
  const [password, setPassword] = useState("");
  const [tableName, setTableName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    function config() {
      switch (table) {
        case "post":
          setTableName("Publicação");
          setUrl("postgeral/ExcluirCategorie");
          break;
        case "postCategory":
          setTableName("Categoria de Publicação");
          setUrl("postgeral/ExcluirCategorie");
          break;
        default:
          break;
      }
    }
    config();
  }, []);

  async function handleDelete() {
    try {
      const { data: edit } = await api.delete(`${url}/${id}`);

      //const { data : edit } = await api.delete(`${url}/${id}`, {password:password});
      onClose();
      toast.success("Removido com sucesso!");
    } catch (error) {
      console.error(error);
      //toast.error(error.response.data.message);
    }
  }

  return (
    <ModalPostDelete id={idmodel}>
      <ContainerDataM>
        <h5>Apagar {tableName}?</h5>

        <BtnDataClose type="button" onClick={onClose}>
          X
        </BtnDataClose>

        <Divisiond>
          <label> id: </label>

          <ContainerInt type="text" id="recipient-name" value={id} />
        </Divisiond>

        <Divisiond>
          <BtnData type="submit" onClick={handleDelete}>
            Publicar Galeria
          </BtnData>
        </Divisiond>
        <Divisiond>
          <BtnDataClose type="button" onClick={onClose}>
            cancelar
          </BtnDataClose>
        </Divisiond>
      </ContainerDataM>
    </ModalPostDelete>
  );
}
