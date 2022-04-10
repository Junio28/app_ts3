import {Request, Response } from 'express';

import { Cliente } from '../models/Cliente';

export class ClienteController {

 async index(req: Request, res: Response){
    //let Cliente: any = [];
    let clientes:Array<Cliente>;
    try{
        clientes = await Cliente.findAll();
        res.json(clientes);
    } catch(error){
        (err: Error) => res.status(500).json(err)
    }
}


async create (req: Request, res: Response){
    //let Cliente: any = [];
    let clientes:Array<Cliente>;
    try{
        clientes = await Cliente.create(req.body);
        res.status(201).send({message:'Cliente creado de forma satisfactoria'})
    } catch(error){
        (err: Error) => res.status(500).json(err)
    }
}
}