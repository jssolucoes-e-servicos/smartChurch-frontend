import React from "react";
import AppLayout from "src/layouts/AppLayout";
import {
  ContainerPerfil,
  SectorPerfil,
  SectorImgPerfeil,
  SectorParagraPerfeil,
  DataPerfil,
} from "src/styles/pages/perfil";
import CardMaster from "src/Components/CardMaster";
import { CardSector } from "src/styles/stylesGlobal";
export default function Dashboard({ userData }) {
  console.log(userData);
  return (
    <AppLayout userData={userData}>
      <CardSector>
        <ContainerPerfil>
          <SectorPerfil background="/assets/perfil.png">
            {userData.image != null && userData.image.trim().length > 20 ? (
              <SectorImgPerfeil src={userData.image} alt="" />
            ) : (
              <SectorImgPerfeil
                src="https://www.rocketseat.com.br/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FSTa4adENTJ2u5hFq2vjT&w=750&q=100"
                alt=""
              />
            )}

            <DataPerfil>{userData.name}</DataPerfil>

            <DataPerfil>{userData.sector}</DataPerfil>
            <SectorParagraPerfeil>
              Do not be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens bed design but the back is...
            </SectorParagraPerfeil>
          </SectorPerfil>
          {/* <div className="content ">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-center py-4">
              <div className="card card-user col-md-6">
                <div className="card-body">
                  <p className="card-text"></p>
                  <div className="author">
                    <div className="block block-one"></div>
                    <div className="block block-two"></div>
                    <div className="block block-three"></div>
                    <div className="block block-four"></div>
                    <a href="javascript:void(0)">
                      {userData.image != null &&
                      userData.image.trim().length > 20 ? (
                        <img className="avatar" src={userData.image} alt="" />
                      ) : (
                        <img
                          className="avatar"
                          src="https://www.rocketseat.com.br/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FSTa4adENTJ2u5hFq2vjT&w=750&q=100"
                          alt=""
                        />
                      )}

                      <h5 className="title">{userData.name}</h5>
                    </a>
                    <p className="description">{userData.sector}</p>
                  </div>
                  <p></p>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens bed design but the back is...
                  </div>
                </div>
                <div className="card-footer">
                  <div className="button-container">
                    <button
                      href="javascript:void(0)"
                      className="btn btn-icon btn-round btn-facebook px-2"
                    >
                      <i className="fab fa-facebook"></i>
                    </button>
                    <button
                      href="javascript:void(0)"
                      className="btn btn-icon btn-round btn-twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      href="javascript:void(0)"
                      className="btn btn-icon btn-round btn-google"
                    >
                      <i className="fab fa-google-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </ContainerPerfil>
      </CardSector>
    </AppLayout>
  );
}

import { parseCookies } from "nookies";
export const getServerSideProps = async (ctx) => {
  const { "3sda.profile": profile } = parseCookies(ctx);
  if (!profile) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  }

  return {
    props: { userData: JSON.parse(profile) },
  };
};
