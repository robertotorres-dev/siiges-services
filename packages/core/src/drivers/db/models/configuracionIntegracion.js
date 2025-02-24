const { Model, DataTypes, Sequelize } = require('sequelize');

const CONFIGURACION_INTEGRACION_TABLE = 'configuracion_integraciones';

const ConfiguracionIntegracionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  accion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  metodo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  endpoint: {
    type: DataTypes.STRING,
  },
  path: {
    type: DataTypes.STRING,
  },
  accessKeyId: {
    type: DataTypes.STRING,
  },
  accessKeySecret: {
    type: DataTypes.STRING,
  },
  apiKey: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: null,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
    defaultValue: null,
  },
};

class ConfiguracionIntegracion extends Model {
  static associate() {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONFIGURACION_INTEGRACION_TABLE,
      modelName: 'ConfiguracionIntegracion',
      timestamps: false,
    };
  }
}

module.exports = {
  CONFIGURACION_INTEGRACION_TABLE, ConfiguracionIntegracionSchema, ConfiguracionIntegracion,
};
