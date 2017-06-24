/**
 * Created by rpaulin on 6/23/17.
 */

module.exports = function(sequelize, DataTypes)
{
	var Item = sequelize.define("Item", {
		id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},	
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		image_link: DataTypes.TEXT,
		price: {type: DataTypes.DECIMAL(10,2), defaultValue: 0.00},
		category_id: {
					type: DataTypes.INTEGER, 
					allowNull: false, 
					references: {
						model: Category,
						key: id,
					}
				},
		user_id: {
					type: DataTypes.INTEGER, 
					allowNull: false, 
					references: {
						model: User,
						key: id,
					}
				}
	});

	return Item;


};
