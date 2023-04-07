import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('Your database Name', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Video = sequelize.define('videos', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Video;
