
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {produto: "Tiras Reagentes para Medidor de Glicose Free1 (50un)", price: 102.65, categoria_id: 1, marca_id: 1, fornecedor_id: 1}
      ]);
    });
};
