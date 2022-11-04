const nodemailer = require("nodemailer");
import configmail from "../../configlocal";

export default function sendMail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    auth: {
      user: configmail.USERMAIL,
      pass: configmail.PASSMAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      from: "noreplaysantalimpeza.3sdigital.com.br",
      to: "nandops25@hotmail.com",
      replayTo: req.body.email,
      subject: "CONTATO ATRAVES DO SITE SANTA LIMPEZA EMAIL NOVO",
      text: "Hello Word",
      html: "<b>Email Santa limpeza teste NALDOOO</b>",
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
}
