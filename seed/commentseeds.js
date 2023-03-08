const { Comment } = require('../models');

const commentData = [{
        comment_text: "Hello World!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "How did the chicken cross the road?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I really like Picnics in the park!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;