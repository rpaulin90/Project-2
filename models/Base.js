/**
 * Created by rpaulin on 6/23/17.
 */
module.exports = function(sequelize, DataTypes) {

    var Base = sequelize.define("Base", 
    {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        base_name: DataTypes.STRING

    },{
        timestamps: false
    });

    Base.associate = function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Base.hasMany(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Base;


};