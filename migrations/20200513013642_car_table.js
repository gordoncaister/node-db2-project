
exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl => {
      tbl.increments();
      tbl.string("VIN",17).notNullable();
      tbl.string("Make",30).notNullable();
      tbl.string("Model",30).notNullable();
      tbl.integer("Mileage",30).notNullable();
      tbl.string("Title Status",30);
      tbl.string("Transmission Type",30);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
