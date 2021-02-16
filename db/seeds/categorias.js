
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categorias').del()
    .then(function () {
      // Inserts seed entries
      return knex('categorias').insert([
        {categoria: "Categoria Um"},
        {categoria: "Categoria Dois"},
        {categoria: "Categoria Três"},
        {categoria: "Categoria Quatro"},
        {categoria: "Categoria Cinco"},
      ]);
    });
};
