import React, { useState, useEffect } from "react";
import API from "../../services/api";
import Link from "next/link";
import {
  ContainerForm,
  BlockBase,
  GroupForm,
  BlockForm,
  BoxInput,
  InputSubject,
  SelectIpt,
  BoxMessage,
  TextMessage,
  BlockAccept,
  BoxCheck,
  InputCheck,
  BoxTextAccept,
  TextAccept,
  GroupButton,
  BlockButton,
  BlockTextBtn,
  TextButton,
  BlockIconBtn,
  ImgArrowBlue,
  InputCheckCuston,
} from "./styles";
import { toast } from "react-toastify";

const DATA_FAKE = [
  {
    id: 1,
    title: "Atendimento ao cliente",
    email: "fernandosorrentino26@gmail.com",
  },
  {
    id: 2,
    title: "Desenvolvimento",
    email: "ronandofenomeno@desenvolvimento.com",
  },

  {
    id: 3,
    title: "Pedidos",
    email: "pedidos@pedidos.com",
  },
];
export default function Form({}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(DATA_FAKE);
    //console.log(data);
  }, []);
  //console.log(data);

  const [subject, setSubject] = useState(0);
  const [sector, setSector] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);
  const [sending, setSending] = useState(false);

  const [sectormail, setMail] = useState("");
  const [setortitle, setSectorTitle] = useState("");

  const handleFilter = (sector) => {
    const filteredByName = data.find((item) => item.id == sector.toLowerCase());
    setMail(filteredByName.email);
    setSectorTitle(filteredByName.title);
    console.log(filteredByName, sectormail, "mail", setortitle, "setor");
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (terms === false) {
      toast.error("Aceite os termos");
    } else {
      setSending(true);
      setSending(true);

      try {
        let dataSend = {
          sectormail,
          setortitle,
          name,
          email,
          city,
          state,
          phone,
          message,
        };
        console.log(dataSend, "sector aqui");
        fetch("/api/sendMail", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSend),
        });

        toast.success("Mensagem enviada com sucesso");
        toast.info("Em breve entraremos em contato!");
        clearInputs();
      } catch (error) {
        toast.error("Falha ao enviar menssagem");
        console.error(error);
      } finally {
        setTerms(false);
        setSending(false);
      }
    }
  };

  const clearInputs = () => {
    setSubject(0);
    setSectorTitle("");
    setMail("");
    setName("");
    setEmail("");
    setCity("");
    setState("");
    setPhone("");
    setMessage("");
    setTerms(false);
  };

  return (
    <ContainerForm>
      <BlockBase>
        <GroupForm onSubmit={(e) => sendData(e)}>
          <BlockForm>
            <SelectIpt
              id="name"
              name="name"
              value={subject}
              onChange={(e) => {
                handleFilter(e.target.value), setSubject(e.target.value);
              }}
              //onChangeCapture={(e) => setSubject(e.target.value)}
            >
              {/* <option value="1">Escolha o assunto</option> */}
              {data !== null ? (
                data.map((opt) => {
                  return (
                    <>
                      <option key={`option-subject-${opt.id}`} value={opt.id}>
                        {opt.title}
                      </option>
                    </>
                  );
                })
              ) : (
                <span>Sem Conteúdo</span>
              )}

              {/* {data.map((opt) => {
                return (
                  <>
                    <input
                      name={"sector"}
                      type="text"
                      onClick={() => setSector(opt.title)}
                    ></input>
                    <option key={`option-subject-${opt.id}`} value={opt.email}>
                      {opt.title}
                    </option>
                  </>
                );
              })} */}
            </SelectIpt>
            <BoxInput>
              <InputSubject
                type={"text"}
                name={"name"}
                placeholder={"Nome"}
                color={"#676767"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <InputSubject
                type={"email"}
                placeholder={"Email"}
                color={"#676767"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <InputSubject
                type={"text"}
                name={"city"}
                placeholder={"Cidade"}
                color={"#676767"}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </BoxInput>

            <SelectIpt
              id="estado"
              name="estado"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="0" hidden>
                Estado
              </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </SelectIpt>

            <BoxInput>
              <InputSubject
                type={"tel"}
                name={"phone"}
                placeholder={"Telefone"}
                color={"#676767"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </BoxInput>
          </BlockForm>

          <BlockForm>
            <BoxMessage>
              <TextMessage
                type={"text"}
                name={"message"}
                placeholder={"Mensagem"}
                color={"#676767"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </BoxMessage>

            <BlockAccept>
              <BoxCheck>
                <InputCheckCuston
                  type="checkbox"
                  id="termos"
                  onChange={(e) => setTerms(e.target.checked)}
                  checked={terms}
                />
              </BoxCheck>

              <BoxTextAccept>
                <TextAccept for="termos">
                  Ao enviar, confirmo que li e aceito sua{" "}
                  <Link href="#">
                    <a target="_blank">Declaração de Privacidade. </a>
                  </Link>{" "}
                  Eu gostaria de receber e-mails de marketing e/ ou promocionais
                  da Mapa.
                </TextAccept>
              </BoxTextAccept>
            </BlockAccept>

            <GroupButton>
              <BlockButton>
                {sending === false ? (
                  <button type="submit">
                    <TextButton>Enviar</TextButton>
                  </button>
                ) : (
                  <button disabled>
                    <TextButton>Enviando...</TextButton>
                  </button>
                )}

                <BlockIconBtn>
                  <ImgArrowBlue
                    src="/image/icones/ArrowWhite.svg"
                    id="Iconbtn"
                  />
                </BlockIconBtn>
              </BlockButton>
            </GroupButton>
          </BlockForm>
        </GroupForm>
      </BlockBase>
    </ContainerForm>
  );
}

// import React from "react";
// import Link from "next/link";
// import {
//   ContainerForm,
//   BlockBase,
//   GroupForm,
//   BlockForm,
//   BoxInput,
//   InputSubject,
//   SelectIpt,
//   BoxMessage,
//   TextMessage,
//   BlockAccept,
//   BoxCheck,
//   InputCheckCuston,
//   BoxTextAccept,
//   TextAccept,
//   GroupButton,
//   BlockButton,
//   BlockTextBtn,
//   TextButton,
//   BlockIconBtn,
//   ImgArrowBlue,
// } from "./styles";

// export default function Form() {
//   return (
//     <ContainerForm>
//       <BlockBase>
//         <GroupForm>
//           <BlockForm>
//             <SelectIpt id="name" name="name" multiple="">
//               <option value="" hidden>
//                 Escolha o assunto
//               </option>
//               <option value="nandops25@hotmail.com">Atendimento ao consumidor</option>
//               <option value="2">Marketing</option>
//               <option value="3">Vendedores</option>
//               <option value="4">Quero vender MAPA</option>
//               <option value="5">Recursos Humanos</option>
//             </SelectIpt>

//             <BoxInput>
//               <InputSubject
//                 type={"text"}
//                 name={"usuario"}
//                 placeholder={"Nome"}
//                 color={"#676767"}
//               />
//             </BoxInput>

//             <BoxInput>
//               <InputSubject
//                 type={"email"}
//                 placeholder={"Email"}
//                 color={"#676767"}
//               />
//             </BoxInput>

//             <BoxInput>
//               <InputSubject
//                 type={"text"}
//                 name={"usuario"}
//                 placeholder={"Cidade"}
//                 color={"#676767"}
//               />
//             </BoxInput>

//             <SelectIpt id="estado" name="estado">
//               <option value="" hidden>
//                 Estado
//               </option>
//               <option value="AC">Acre</option>
//               <option value="AL">Alagoas</option>
//               <option value="AP">Amapá</option>
//               <option value="AM">Amazonas</option>
//               <option value="BA">Bahia</option>
//               <option value="CE">Ceará</option>
//               <option value="DF">Distrito Federal</option>
//               <option value="ES">Espírito Santo</option>
//               <option value="GO">Goiás</option>
//               <option value="MA">Maranhão</option>
//               <option value="MT">Mato Grosso</option>
//               <option value="MS">Mato Grosso do Sul</option>
//               <option value="MG">Minas Gerais</option>
//               <option value="PA">Pará</option>
//               <option value="PB">Paraíba</option>
//               <option value="PR">Paraná</option>
//               <option value="PE">Pernambuco</option>
//               <option value="PI">Piauí</option>
//               <option value="RJ">Rio de Janeiro</option>
//               <option value="RN">Rio Grande do Norte</option>
//               <option value="RS">Rio Grande do Sul</option>
//               <option value="RO">Rondônia</option>
//               <option value="RR">Roraima</option>
//               <option value="SC">Santa Catarina</option>
//               <option value="SP">São Paulo</option>
//               <option value="SE">Sergipe</option>
//               <option value="TO">Tocantins</option>
//               <option value="EX">Estrangeiro</option>
//             </SelectIpt>

//             <BoxInput>
//               <InputSubject
//                 type={"tel"}
//                 name={"telefone"}
//                 placeholder={"Telefone"}
//                 color={"#676767"}
//               />
//             </BoxInput>
//           </BlockForm>

//           <BlockForm>
//             <BoxMessage>
//               <TextMessage
//                 type={"text"}
//                 name={"message"}
//                 placeholder={"Mensagem"}
//                 color={"#676767"}
//               />
//             </BoxMessage>

//             <BlockAccept>
//               <BoxCheck>
//                 <InputCheckCuston type="checkbox" id="termos" />
//               </BoxCheck>

//               <BoxTextAccept>
//                 <TextAccept for="termos">
//                   Ao enviar, confirmo que li e aceito sua{" "}
//                   <Link href="#">
//                     <a target="_blank">Declaração de Privacidade. </a>
//                   </Link>{" "}
//                   Eu gostaria de receber e-mails de marketing e/ ou promocionais
//                   da MAPA.
//                 </TextAccept>
//               </BoxTextAccept>
//             </BlockAccept>

//             <GroupButton>
//               <BlockButton>
//                 <BlockTextBtn>
//                   <TextButton>Enviar</TextButton>
//                 </BlockTextBtn>
//                 <BlockIconBtn>
//                   <ImgArrowBlue
//                     src="/image/icones/ArrowWhite.svg"
//                     id="Iconbtn"
//                   />
//                 </BlockIconBtn>
//               </BlockButton>
//             </GroupButton>
//           </BlockForm>
//         </GroupForm>
//       </BlockBase>
//     </ContainerForm>
//   );
// }
