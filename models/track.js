'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    track_name: DataTypes.STRING,
    track_duration: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.Album);
  };
  return Track;
};