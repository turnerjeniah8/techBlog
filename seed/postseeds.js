const { Post } = require('../models');

const postData = [{
        title: 'Weather',
        content: 'The weather has been so bipolar. It has been really cold these past few days!',
        user_id: 1

    },
    {
        title: 'Snacks',
        content: 'My favorite snack is a Oatmeal Creme Pie!',
        user_id: 2
    },
    {
        title: 'Finals',
        content: 'Finals week is coming up! goodluck!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;