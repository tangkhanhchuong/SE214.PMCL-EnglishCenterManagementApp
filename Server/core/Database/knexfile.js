// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'EnglishCenter',
      user: 'postgres',
      password: 'khanhchuong',
      host: 'localhost'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  }
};
