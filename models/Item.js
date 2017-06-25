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
		url_slug: DataTypes.STRING,
		url_slug_base: DataTypes.STRING,
		url_slug_category: DataTypes.STRING
	},{
        timestamps: false
    });

	return Item;
};
