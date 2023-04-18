const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./comments');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Blog, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comments };
