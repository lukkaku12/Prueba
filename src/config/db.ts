import { Sequelize } from 'sequelize-typescript';
import { User } from '../model';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'bcmr7zqiuwqnbwpqc1lx-mysql.services.clever-cloud.com',
    username: 'u5wuf7hv0hnvhi71',
    password: '3l6xcNeMQ6dSJj6Tb390',
    database: 'bcmr7zqiuwqnbwpqc1lx',
    models: [User], // Añade todos tus modelos aquí
});

export default sequelize;
