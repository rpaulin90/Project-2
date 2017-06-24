/**
 * Created by rpaulin on 6/23/17.
 */
module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        category_name: DataTypes.STRING

    },{
        timestamps: false
    });

    // Category.associate = function(models) {
    //     // Using additional options like CASCADE etc for demonstration
    //     // Can also simply do Task.belongsTo(models.User);
    //     Category.hasMany(models.Item, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Category;


    //hasMany.Item

};