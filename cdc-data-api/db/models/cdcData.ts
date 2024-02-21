import { Model, DataTypes } from 'sequelize';

import sequelize from '../sequelize';

interface CDCDataAttributes {
  uuid: string;
  jurisdictionId: string;
  startDate: Date;
  endDate: Date;
  category: string;
  categoryType: string;
  vaccinationStatus: string;
  intent: string;
  demographic: string;
  difficultyReceivingVaccine: string;
  vaccinationWeek: string;
  vaccinationYear: number;
  vaccinationFrequency: string;
  vaccinationPercentage: number;
  vaccinationPercentageRange: string;
  totalVaccinations: number;
  vaccinationChange: number;
}

class CDCData extends Model<CDCDataAttributes> {
  public uuid!: string;
  public jurisdictionId!: string;
  public startDate!: Date;
  public endDate!: Date;
  public category!: string;
  public categoryType!: string;
  public vaccinationStatus!: string;
  public intent!: string;
  public demographic!: string;
  public difficultyReceivingVaccine!: string;
  public vaccinationWeek!: string;
  public vaccinationYear!: number;
  public vaccinationFrequency!: string;
  public vaccinationPercentage!: number;
  public vaccinationPercentageRange!: string;
  public totalVaccinations!: number;
  public vaccinationChange!: number;
}

CDCData.init(
  {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    jurisdictionId: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    category: {
      type: DataTypes.STRING,
    },
    categoryType: {
      type: DataTypes.STRING,
    },
    vaccinationStatus: {
      type: DataTypes.STRING,
    },
    intent: {
      type: DataTypes.STRING,
    },
    demographic: {
      type: DataTypes.STRING,
    },
    difficultyReceivingVaccine: {
      type: DataTypes.STRING,
    },
    vaccinationWeek: {
      type: DataTypes.STRING,
    },
    vaccinationYear: {
      type: DataTypes.INTEGER,
    },
    vaccinationFrequency: {
      type: DataTypes.STRING,
    },
    vaccinationPercentage: {
      type: DataTypes.DECIMAL(5, 2),
    },
    vaccinationPercentageRange: {
      type: DataTypes.STRING,
    },
    totalVaccinations: {
      type: DataTypes.INTEGER,
    },
    vaccinationChange: {
      type: DataTypes.DECIMAL(5, 2),
    },
  },
  {
    sequelize,
    modelName: 'CDCData',
    tableName: 'cdc_data', // Specify your actual table name
  }
);

export default CDCData;
