// Central services registry
// This file exports all services for easy importing

const userService = require('./userService');

// Future services will be added here:
// const postService = require('./postService');
// const commentService = require('./commentService');
// const orderService = require('./orderService');

module.exports = {
  userService,
  // postService,
  // commentService,
  // orderService,
};

// Alternative export pattern for destructuring:
// module.exports = {
//   user: userService,
//   post: postService,
//   comment: commentService,
// };
