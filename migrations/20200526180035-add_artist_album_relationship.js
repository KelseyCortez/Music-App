'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Albums', 'artist_id',{
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Artists', //name of target table
        key: 'id', //key in Target model
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Albums', 'artist_id');
  },
};
