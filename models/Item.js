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
		price: {type: DataTypes.DECIMAL(10,2), defaultValue: 0.00}
	});

    // Item.associate = function(models) {
    //     // Using additional options like CASCADE etc for demonstration
    //     // Can also simply do Task.belongsTo(models.User);
    //     Item.belongsTo(models.User, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    //
    // Item.associate = function(models) {
    //     // Using additional options like CASCADE etc for demonstration
    //     // Can also simply do Task.belongsTo(models.User);
    //     Item.belongsTo(models.Category, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };


	return Item;


};
