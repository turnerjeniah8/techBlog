const Post = require('./Post');
const User = require('./User');
const Comment = require('./comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});


module.exports = { User, Comment, Post }; 