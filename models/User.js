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
        rank: DataTypes.STRING,
        base_id: {
        			type: DataTypes.INTEGER, 
        			allowNull: false, 
        			references: {
        				model: Base,
        				key: id,
        			}
				}
	});

	return User;


};
