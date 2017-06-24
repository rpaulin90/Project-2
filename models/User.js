/**
 * Created by rpaulin on 6/23/17.
 */

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
        image_link: DataTypes.STRING,
        rank: DataTypes.STRING,
        base_id: DataTypes.INTEGER

    });

    return User;


};
