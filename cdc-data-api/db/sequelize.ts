import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('challenge_cdc_data', 'root', 'root', {
  dialect: 'mysql',
  host: '127.0.0.1',
  define: {
    timestamps: false,
  },
});

export default sequelize;
