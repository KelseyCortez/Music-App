'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.Artist, { foreignKey: 'artist_id' });
    Album.hasMany(models.Track, { foreignKey: 'album_id'});
  };
  return Album;
};