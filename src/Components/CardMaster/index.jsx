import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CardMax } from "./styles";

//import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function CardMaster({
  appData,
  viewSize,
  children,
  background,
}) {
  return <CardMax viewSize={viewSize}>{children}</CardMax>;
}
