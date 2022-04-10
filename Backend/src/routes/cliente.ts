import { Request, Response, Application  } from 'express';

import { ClienteController  } from '../controllers/cliente.controller';

export class ClienteRoutes {

    public clienteController: ClienteController = new ClienteController();

    public ruta(app: Application) {

        app.route("/clientes").get(this.clienteController.index)
    }
}