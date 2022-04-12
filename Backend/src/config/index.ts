import express, { Application   } from 'express';
import morgan from 'morgan';
const cors = require('cors');

import { Routes } from '../routes/index';

 export class App {
    app: Application;

    constructor(
       private port?: number | string,
       public routePrv: Routes = new Routes()
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private routes() {
        this.routePrv.clienteRoutes.ruta(this.app);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //valores tipo JSON
        this.app.use(express.urlencoded({ extended: false})); //valores formulario
  
    }


   private settings(){
    this.app.set('port', this.port || 3000);
   }

   async listen() {
     await this.app.listen(this.app.get('port'));
        console.log('Server en el puerto: ', this.app.get('port')); 
   }
}