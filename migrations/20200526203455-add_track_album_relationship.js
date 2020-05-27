'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tracks', 'album_id',{
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: 'Albums', //name of target table
      key: 'id', //key in Target model
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',

  });
},

down: (queryInterface, Sequelize) => {
  return queryInterface.changeColumn('Tracks', 'album_id');
},
};
  
