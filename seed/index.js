const seedUsers = require('./userseeds');
const seedComments = require('./commentseeds');
const seedPosts = require('./postseeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedPosts(); 
    await seedUsers();
    await seedComments();
    process.exit(0);
};

seedAll();