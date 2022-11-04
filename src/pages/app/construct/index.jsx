import { useState } from "react";

import { BiEdit } from "react-icons/bi";
import { FcDeleteDatabase } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import CardMaster from "src/Components/CardMaster";
import {
  CardImg, CardMaxIcons, Cardparagraph, CardTexts,
  CardTtile
} from "src/Components/CardMaster/styles";
import Tbsfer from "src/Components/TabBar";
import AppLayout from "src/layouts/AppLayout";
import api from "src/services/api";
import {
  CadBox, CadBoxBtn,
  CadBoxBtnDelete, CardSector,
  Cardtata4, SectorBtnTable
} from "src/styles/stylesGlobal";

export default function Construction({ userData, pageData = null }) {
  const [inscritList, setPostsList] = useState(pageData.inscrits);

  console.log(pageData.inscrits);

  return (
    <AppLayout userData={userData}>
      <CardSector>
        <CardMaster viewSize="sizemd12">
          <h2>Constructions pages </h2>
        </CardMaster>
      </CardSector>
      {/* sector 2 */}
      <CardSector>
        <CardMaster viewSize="sizemd12">
          <h2>Card 4, 6, 12 </h2>
        </CardMaster>

        <CardMaster viewSize="sizemd12">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/platform.svg" />
            <CardTtile>10</CardTtile>
          </CardMaxIcons>

          <CardTexts>
            <Cardparagraph>Você tem 18 publicações no blog site</Cardparagraph>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você também terá acesso ao grupo exclusivo de alunos e
              alunas, o ambiente perfeito para fortalecer habilidades
              comportamentais importantes.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>

        <CardMaster viewSize="sizemd04">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/target.svg" />
            <CardTtile>12</CardTtile>
          </CardMaxIcons>
          <CardTexts>
            <Cardparagraph>Nossas empresas</Cardparagraph>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>
        <CardMaster viewSize="sizemd06">
          <CardMaxIcons>
            <CardImg src="https://www.rocketseat.com.br/assets/icons/laptop.svg" />
            <CardTtile>24</CardTtile>
          </CardMaxIcons>
          <Cardparagraph>publicações da empresas</Cardparagraph>
          <CardTexts>
            <Cardparagraph>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você poderá contar com um time incrível de instrutores
              durante a jornada.
            </Cardparagraph>
          </CardTexts>
        </CardMaster>

        <CardSector>
          <Cardtata4>
            <CardMaxIcons>
              <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
              <CardTtile>24</CardTtile>
            </CardMaxIcons>
            <></>
            <div>
              <span>12 no site</span>
            </div>
          </Cardtata4>
          <Cardtata4>
            <CardMaxIcons>
              <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
              <CardTtile>24</CardTtile>
            </CardMaxIcons>
            <></>
            <div>
              <span>12 no site</span>
            </div>
            <p>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você poderá contar com um time incrível de instrutores
              durante a jornada.
            </p>
          </Cardtata4>
          <Cardtata4>
            <CardMaxIcons>
              <CardImg src="https://www.rocketseat.com.br/assets/icons/profile.svg" />
              <CardTtile>24</CardTtile>
            </CardMaxIcons>
            <p>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você poderá contar com um time incrível de instrutores
              durante a jornada.
            </p>
          </Cardtata4>
          <Cardtata4>
            <p>
              Você poderá contar com um time incrível de instrutores durante a
              jornada. Você poderá contar com um time incrível de instrutores
              durante a jornada.
            </p>
          </Cardtata4>
        </CardSector>

        {/* box 5 */}
        <CardMaster viewSize="sizemd04" key="23">
          <CardMaxIcons>
            <CardImg src="/assets/perfil.png" />
            <CardTtile> wi_1 </CardTtile>
          </CardMaxIcons>
          <Cardparagraph>publicações 3sapplication</Cardparagraph>
          <CardTexts>
            <Cardparagraph>Tag Google imagem4.png</Cardparagraph>
            <SectorBtnTable>
              <CadBoxBtn>
                <GrClose />
              </CadBoxBtn>
              <CadBoxBtnDelete>
                <BiEdit />
              </CadBoxBtnDelete>
            </SectorBtnTable>
          </CardTexts>
        </CardMaster>
      </CardSector>

      {/* box TabBarcustomer */}
      <CadBox>
        <div>
          <h2>galeries</h2>
        </div>
        <div>
          <Tbsfer>
            <ul className="tabs">
              <li data-tab-target="#categoryagalerie" className="active tab">
                Categoria empresa
              </li>
              <li data-tab-target="#imagegalerie" className="tab">
                Imagens galeria
              </li>
              <li data-tab-target="#about" className="tab">
                About
              </li>
            </ul>

            <div className="tab-contentTab3s">
              <div id="categoryagalerie" data-tab-content className="active">
                <h1>Empresas</h1>

                <p>Você tem 12 empresas no site</p>
                <CardMaster viewSize="sizemd12">
                  <p>Itens esperado</p>
                  <p>Photo</p>
                  <p>Tilte</p>
                  <p>Descrição</p>
                  <p>Position</p>
                  <p>Active</p>
                </CardMaster>
                <CardMaster viewSize="sizemd12" key="f12">
                  <CardMaxIcons>
                    <CardImg src="/assets/perfil.png" />
                    <CardTtile> 3Saplication </CardTtile>
                  </CardMaxIcons>
                  <Cardparagraph>publicações 3sdigital</Cardparagraph>
                  <CardTexts>
                    <Cardparagraph>Tag Google imagen4.png</Cardparagraph>
                    <SectorBtnTable>
                      <CadBoxBtn>
                        <GrClose />
                      </CadBoxBtn>

                      <CadBoxBtnDelete>
                        <BiEdit />
                      </CadBoxBtnDelete>
                    </SectorBtnTable>
                  </CardTexts>
                </CardMaster>
              </div>

              <div id="imagegalerie" data-tab-content>
                <h1>Galeria</h1>
                <h1 id="textTba"></h1>
                <p>Você tem 12 imagens na galeria do site</p>
                <CardSector>
                  <h6 className="mb-1">Projects</h6>
                </CardSector>
                <CardSector>
                  <CardMaster viewSize="sizemd04" key="f26">
                    <CardMaxIcons>
                      <CardImg src="/assets/perfil.png" />
                      <CardTtile> w12 </CardTtile>
                    </CardMaxIcons>
                    <Cardparagraph>publicações 3sapplication</Cardparagraph>
                    <CardTexts>
                      <Cardparagraph>Tag Google imagen4.png</Cardparagraph>
                      <SectorBtnTable>
                        <CadBoxBtn>
                          <GrClose />
                        </CadBoxBtn>

                        <CadBoxBtnDelete>
                          <BiEdit />
                        </CadBoxBtnDelete>
                      </SectorBtnTable>
                    </CardTexts>
                  </CardMaster>
                </CardSector>
              </div>
              <div id="about" data-tab-content>
                <h1>About</h1>
                <p>
                  Você poderá contar com um time incrível de instrutores durante
                  a jornada. Você poderá contar com um time incrível de
                  instrutores durante a jornada. Você poderá contar com um time
                  incrível de instrutores durante a jornada. Você poderá contar
                  com um time incrível de instrutores durante a jornada. Você
                  poderá contar com um time incrível de instrutores durante a
                  jornada. Você poderá contar com um time incrível de
                  instrutores durante a jornada. Você poderá contar com um time
                  incrível de instrutores durante a jornada. Você poderá contar
                  com um time incrível de instrutores durante a jornada. Você
                  poderá contar com um time incrível de instrutores durante a
                  jornada. Você poderá contar com um time incrível de
                  instrutores durante a jornada. Você poderá contar com um time
                  incrível de instrutores durante a jornada. Você poderá contar
                  com um time incrível de instrutores durante a jornada.
                </p>
              </div>
            </div>
          </Tbsfer>
        </div>
      </CadBox>
      {/* tabela */}
      <CadBox>
        <div className="tab-contentTab3s">
          <div id="categoryagalerie" data-tab-content className="active">
            <h1>Table</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Você tem 12 empresas no site</p>
              <CadBoxBtn type="button">Adicionar novo</CadBoxBtn>
            </div>

            <table className="TableValtra">
              <tbody>
                <tr>
                  <th>PHOTO</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>POSITION</th>
                  <th>ACTIONS&nbsp;(L/MIN.)</th>
                </tr>
                <tr key={`post-items-21`}>
                  <td>
                    <img
                      className="img-thumbnail"
                      width="70"
                      src="/assets/perfil.png"
                      alt="text"
                    />
                  </td>
                  <td>empresa</td>
                  <td>Categoria 3sappllications</td>

                  <td>center</td>
                  <td>
                    <SectorBtnTable>
                      <CadBoxBtn>
                        <BiEdit />
                      </CadBoxBtn>
                      <CadBoxBtnDelete>
                        <FcDeleteDatabase />
                      </CadBoxBtnDelete>
                    </SectorBtnTable>
                  </td>
                </tr>
                <tr key={`post-items-21`}>
                  <td>
                    <img
                      className="img-thumbnail"
                      width="70"
                      src="/assets/perfil.png"
                      alt="text"
                    />
                  </td>
                  <td>empresa</td>
                  <td>Categoria 3sappllications</td>

                  <td>center</td>
                  <td>
                    <SectorBtnTable>
                      <CadBoxBtn>
                        <BiEdit />
                      </CadBoxBtn>
                      <CadBoxBtnDelete>
                        <FcDeleteDatabase />
                      </CadBoxBtnDelete>
                    </SectorBtnTable>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CadBox>
    </AppLayout>
  );
}

import { parseCookies } from "nookies";
export const getServerSideProps = async (ctx) => {
  try {
    const { "3sda.profile": profile } = parseCookies(ctx);
    if (!profile) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      };
    }
    const { data: pageData } = await api.get("inscritos/lista");
    return { props: { userData: JSON.parse(profile), pageData: pageData } };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/app/500",
        permanet: false,
      },
    };
  }
};
