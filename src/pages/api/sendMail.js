const nodemailer = require("nodemailer");

const MAIL_USER = "no-reply@emengeengenharia.com.br";
const MAIL_PASSWORD = "@Emenge2022";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      postAction(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const postAction = async (req, res) => {
  const {
    sectormail: to_mail,
    setortitle,
    name,
    email,
    city,
    state,
    phone,
    message,
  } = req.body;

  try {
    transporter
      .sendMail({
        from: `Cadastro ${name} | Setor ${setortitle} | Luvas Mapa <${MAIL_USER}>`,
        to: `${to_mail}`,
        replayTo: email,
        subject: `Contato através de nosso site 3SDigitalApp [${setortitle}] `,
        text: message,
        html: `<b>Novo cadastro realizado:<b><br><br/>
      <b>Setor responsável: ${setortitle}<b><br/>
      <b>Cliente: ${name}<b><br/>
      <b>E-mail: ${email}<b><br/>
      <b>Contato: ${phone}<b><br/>
      <b>Cidade: ${city} / Estado: ${state}</b><br/><br/>
      <p width:250>Mensagem: ${message}</p><br/><br/>
      <br/>
      <br/>
      <b>Conheça nossa linha completa.</b><br/>
      <a href="https://luvasmapa.com.br/">https://luvasmapa.com.br/</a>
      <br/>
      <br/>
      <br/>
    
      `,
      })
      .then((response) => {
        res.send({ status: "ok" });
      })
      .catch((error) => {
        res.send({ status: "error", error });
      });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};

export default handler;
