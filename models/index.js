const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./comments');


Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comments, {
  foreignKey: 'blog_id',
  onDelete: 'cascade'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

module.exports = { User, Blog, Comments };
