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


async delete(req: Request, res: Response){
    try {

        const clientes = await Cliente.findByPk(req.params.id);
        if (!clientes) {
            return res.status(404).send({ error: 'El  cliente que desea eliminar no existe' });
        }
        await Cliente.destroy({
            where: {
                id: clientes.id
            }
        })
        res.send({ message: 'Cliente Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};
}