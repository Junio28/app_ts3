import { Request, Response, Application  } from 'express';

import { ClienteController  } from '../controllers/cliente.controller';

export class ClienteRoutes {

    public clienteController: ClienteController = new ClienteController();

    public ruta(app: Application) {

        app.route("/clientes").get(this.clienteController.index);
        app.route("/clientes/:id").get(this.clienteController.getOne);
        app.route("/clientes").post(this.clienteController.create);
        app.route("/clientes/:id").put(this.clienteController.update);
        app.route("/clientes/:id").delete(this.clienteController.delete);
    }
}