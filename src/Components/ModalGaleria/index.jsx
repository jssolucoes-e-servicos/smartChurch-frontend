import React, { useState, useEffect } from "react";
import api from "src/services/api";
import { toast } from "react-toastify";
import { ModalDeletegalerie } from "./styles";
export default function ModalDelete({
  idmodel = "ModalDeletGalerie",
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
          setTableName("Publicação Galeria");
          setUrl("ImgGalery/ExcluirPhoto");
          break;
        case "postCategory":
          setTableName("Photo de Publicação");
          setUrl("ImgGalery/ExcluirPhoto");
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

      toast.success("Removido com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      //toast.error(error.response.data.message);
    }
  }

  return (
    <ModalDeletegalerie id={idmodel}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Apagar essa merda{tableName}?
            </h5>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                id:
              </label>
              <label value={id}></label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                value={id}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Senha:
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDelete}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </ModalDeletegalerie>
  );
}
