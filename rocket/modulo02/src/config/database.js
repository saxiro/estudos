module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'rootpass',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true, 
        underscoredAll: true,
    },
};