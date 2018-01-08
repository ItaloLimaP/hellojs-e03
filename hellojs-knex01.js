"use strict"
const knex = require("./db");

  knex.schema.createTable("evento", (table) =>{
    table.increments("idevento");
    table.string("decricaoevento");
    table.date("dataevento");
  }).then(() => {
    console.log("tabela criada");
    process.exit(0);
  }).catch((err)=>{
    console.log(err);
    process.exit(1);
  });