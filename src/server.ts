//Rota de cadastro (metodo POST)
//Rota de usuarios (metodo GET,busca informações do banco de dados para verificar quais usuarios tem e se existe)
//Rota de login com email e senha(metodo PUT)
//Retorna uma response com o token de login

import app from "./app";
import { AddressInfo } from "node:net";

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      `Server started on PORT:${address.port}, using:${address.family}`
    );
  } else {
    console.log(`Server failed to connect to PORT:${PORT}`);
  }
});
