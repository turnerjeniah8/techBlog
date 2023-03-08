const { User } = require('../models');

const userData = [{
        username: 'Anna',
        password: 'anna'

    },
    {
        username: 'Sarah',
        password: 'sarah'
    },
    {
        username: 'Billy',
        password: 'billy'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;