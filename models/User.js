/**
 * Created by rpaulin on 6/23/17.
 */

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
    	id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},	
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
        image_link: DataTypes.TEXT,
        rank: DataTypes.STRING
        // base_id: {
        // 			type: DataTypes.INTEGER,
        // 			allowNull: false
        // 			// references: {
        // 			// 	model: Base,
        // 			// 	key: id
        // 			// }
			// 	}
	});

    User.associate = function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        User.belongsTo(models.Base, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    User.associate = function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        User.hasMany(models.Item, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    // belongsTo.Base
    // hasMany.Item

	return User;


};
