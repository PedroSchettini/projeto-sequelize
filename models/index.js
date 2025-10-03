// Arquivo central para definir todos os relacionamentos
const User = require('./User');
const Address = require('./Address');

// Definindo relacionamentos entre User e Address
User.hasMany(Address, {
  foreignKey: 'userId',
  as: 'addresses'
});

Address.belongsTo(User, {
  foreignKey: 'userId', 
  as: 'user'
});

module.exports = { User, Address };
