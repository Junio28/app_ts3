//import { Model, DataTypes } from 'sequelize'
import { database } from '../database/db';
const { Model, DataTypes } = require ('sequelize');

export class Cliente extends Model {

    public nombres!:  string;
    public apellidos!:  string;
    public correo!:  string;
    public telefonos!: string;
    public celular!: string;
    public direccion!: string;
    public fechaNacimiento!: string;
}

interface ClienteI {
     nombres: string;
     apellidos: string;
     correo: string;
     telefonos: string;
     celular: string;
     direccion: string;
     fechaNacimiento: string;
}

Cliente.init(
    {
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },

    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },

    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefonos: {
        type: DataTypes.STRING,
        allowNull: false
    },

    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },

    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
        },


direccion: {
    type: DataTypes.STRING,
    },
    },
    {
        tableName: "clientes",
        sequelize: database,
        timestamp: true
    } 
);