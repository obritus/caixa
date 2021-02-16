
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marcas').del()
    .then(function () {
      // Inserts seed entries
      return knex('marcas').insert([
        {marca: "Marca Um"},
        {marca: "Marca Dois"},
        {marca: "Marca Três"},
        {marca: "Marca Quatro"},
        {marca: "Marca Cinco"},
      ]);
    });
};
