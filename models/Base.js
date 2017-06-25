/**
 * Created by rpaulin on 6/23/17.
 */
module.exports = function(sequelize, DataTypes) {

    var Base = sequelize.define("Base", 
    {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        base_name: DataTypes.STRING,
        url_slug: DataTypes.STRING

    },{
        timestamps: false
    });

    return Base;
};