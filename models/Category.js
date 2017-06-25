/**
 * Created by rpaulin on 6/23/17.
 */
module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        category_name: DataTypes.STRING,
        url_slug: DataTypes.STRING

    },{
        timestamps: false
    });

    return Category;
};