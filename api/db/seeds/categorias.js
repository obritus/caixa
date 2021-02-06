
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categorias').del()
    .then(function () {
      // Inserts seed entries
      return knex('categorias').insert([
        {categoria: "Glicosímetro"}
      ]);
    });
};
