import {Sequelize}  from 'sequelize';

const sequelize = new Sequelize('mysql://lucas:271214@localhost:3306/pitu');

export default sequelize