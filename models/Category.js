/**
 * Created by rpaulin on 6/23/17.
 */
module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Categorie", {
        category_name: DataTypes.STRING
    },{
        timestamps: false
    });

    return Category;


};