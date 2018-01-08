const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: "./dbe03"
    },
    useNullAsDefault: true // coisas de sqlite.. ¯\_(ツ)_/¯
  });