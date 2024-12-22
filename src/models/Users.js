import Sequelize,{ Model} from 'sequelize';

class Users extends Model {
  static init(sequelize) {
    super.init({
        name:{
          type:Sequelize.STRING,
          allowNull: false
        },
        email:{
          type:Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password:{
          type:Sequelize.STRING,
          allowNull: false
        },
        age:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
    },
    
    {sequelize, tableName: 'users'}
  )}
}

export default Users;