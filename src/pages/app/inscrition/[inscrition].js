import { useEffect, useState } from "react";

import AppLayout from "src/layouts/AppLayout";

import { parseCookies } from "nookies";
import CardMaster from "src/Components/CardMaster";
import {
  CardImg,
  CardMaxIcons,
  Cardparagraph,
  CardTexts,
  CardTtile,
} from "src/Components/CardMaster/styles";
import { CadBox, CardSector } from "src/styles/stylesGlobal";
export default function DetailInscritos({ userData, category, subcategory }) {
  console.log(subcategory, "subcategoria");
  console.log(category, "CATEGORIA");
  const [data, setData] = useState([]);
  const [superBanana, setSuperBanana] = useState([]);
  const [dadofake, setDadoFake] = useState([
    {
      id: 1,
      name: "Alimentos",
      subcategoria: [
        {
          id: 1,
          nome: "Horfruti",
          produto: [
            {
              id: 1,
              name: "Tomate",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " limpar latearia",
                },
                {
                  id: 2,
                  name: " limpar latearia",
                },
                {
                  id: 3,
                  name: " limpar latearia",
                },
              ],
            },
            {
              id: 2,
              name: "detergente",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " limpar latearia",
                },
                {
                  id: 2,
                  name: " limpar latearia",
                },
                {
                  id: 3,
                  name: " limpar latearia",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          nome: "Limpeza",
          produto: [
            {
              id: 1,
              name: "detergente",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " limpar latearia",
                },
                {
                  id: 2,
                  name: " limpar latearia",
                },
                {
                  id: 3,
                  name: " limpar latearia",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          nome: "banheiro",
          produto: [
            {
              id: 1,
              name: "Limpa pedra",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " limpar latearia",
                },
                {
                  id: 2,
                  name: " limpar latearia",
                },
                {
                  id: 3,
                  name: " limpar latearia",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Automóvel",
      subcategoria: [
        {
          id: 1,
          nome: "lataria",
          produto: [
            {
              id: 1,
              name: "Álcool lataria",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 2,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 3,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
            {
              id: 1,
              name: "Álcool vidro",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 2,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 3,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          nome: "Gel para pneu",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 2,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 3,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          nome: "Detergente",
          produto: [
            {
              id: 1,
              name: "Luvas Plus",
              image:
                "https://dataapischool.3sdigital.com.br/front3sdigital/workgalery/valtra4.png",
              description: "Ultra Resistentes",
              punho: "ajustado",
              Reforçadas: "nitrilo",
              lists: [
                {
                  id: 1,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 2,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
                {
                  id: 3,
                  name: " As luvas MAPA ULTRA RESISTENTES foram desenvolvidas especialmente para proteger suas mãos nas tarefas de limpeza mais difíceis e exigentes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Cozinha",
    },
    {
      id: 4,
      name: "Garagem/Áreas externas",
    },
    {
      id: 5,
      name: "Grelha de churrasco",
    },
  ]);

  const handleFilter = () => {
    const filteredByName = dadofake.filter((item) =>
      item.name.toLowerCase().includes(category.toLowerCase())
    );

    const filteredBySubcategory = filteredByName
      .map((item) => item.subcategoria)
      .map((item) => {
        return item.filter((item) =>
          item.nome.toLowerCase().includes(subcategory.toLowerCase())
        );
      });

    setData(filteredBySubcategory[0][0].produto);
  };

  useEffect(() => {
    handleFilter();
  }, []);
  const handleCate = () => {
    const filteredByName = dadofake.filter((item) =>
      item.name.toLowerCase().includes(category.toLowerCase())
    );

    setDadoFake(filteredByName[0].subcategoria);
  };

  useEffect(() => {
    handleCate();
  }, []);

  console.log("data", dadofake);
  useEffect(() => {
    handleRandon();
  }, []);

  const handleRandon = () => {
    const getRandomIntegerInclude = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomWord = () =>
      dadofake[getRandomIntegerInclude(2, dadofake.length - 1)];
    var result = getRandomWord(0, 4);
    setSuperBanana(result);
  };
  console.log(superBanana, " Mega Banana rolou");
  return (
    <AppLayout userData={userData}>
      <CadBox>
        <div>
          <CardMaster viewSize="sizemd12">
            <b>categoria relacionadas /</b>
            {dadofake.map((item) => {
              return <b key={item.id}>{item.nome} / </b>;
            })}
          </CardMaster>
        </div>
        <CardSector>
          {data
            ? data.map((item) => {
                return (
                  <>
                    <CardMaster viewSize="sizemd04" key={item.id}>
                      <CardMaxIcons>
                        <CardImg src={item.image} />
                        <CardTtile> {item.name} </CardTtile>
                      </CardMaxIcons>
                      <Cardparagraph>
                        publicações {item.categorie}
                      </Cardparagraph>
                      <CardTexts>
                        {item.lists
                          ? item.lists.map((obj) => {
                              return (
                                <>
                                  <p>{obj.name}ddddd</p>
                                </>
                              );
                            })
                          : null}
                        <Cardparagraph>Tag Google {item.title}</Cardparagraph>
                      </CardTexts>
                    </CardMaster>
                  </>
                );
              })
            : null}
        </CardSector>
        <div></div>
      </CadBox>
    </AppLayout>
  );
}
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
    const queryString = ctx.query;

    return {
      props: {
        userData: JSON.parse(profile),
        category: queryString.categorie,
        subcategory: queryString.subcategory,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/app/500",
        permanet: false,
      },
    };
  }
};
