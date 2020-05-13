
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"VIN": "18293495069781231", "Make": "Mazda", "Model": "3", "Mileage": 57829, "Title Status":"2nd owner","Transmission Type": "6 speed manual"},
        {"VIN": "9AS14295BB9752AF", "Make": "Ford", "Model": "Focus ST", "Mileage": 14000, "Title Status":"Salvage","Transmission Type": "automatic"},
      ]);
    });
};
