const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Movie extends Model {}

//initialize table
Movie.init(
  {
    movietitle: {
      type: DataTypes.STRING,
    },
    timeslot: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  { sequelize, modelName: "movie", timestamps: false }
);
module.exports = Movie;
