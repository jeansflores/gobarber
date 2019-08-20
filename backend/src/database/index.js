import Sequelize from 'sequelize';

import mongoose from 'mongoose';
import File from '../app/models/File';
import User from '../app/models/User';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [File, User, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
  }
}

export default new Database();
