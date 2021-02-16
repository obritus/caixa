
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {produto: "Produto um", price: 99.65, estoque: 100, barcode: 456789321, categoria_id: 3, marca_id: 1, fornecedor_id: 1},
        {produto: "Produto mais caro", price: 299.98, estoque: 25, barcode: 005514314, categoria_id: 4, marca_id: 3, fornecedor_id: 1},
        {produto: "Caixa com 200 unidades", price: 120.00, estoque: 11, barcode: 005514314, categoria_id: 3, marca_id: 1, fornecedor_id: 1},
        {produto: "Produto mais barato", price: 18.99, estoque: 150, barcode: 005514314, categoria_id: 6, marca_id: 2, fornecedor_id: 1},
        {produto: "Máscara 90", price: 29.99, estoque: 1000, barcode: 005514314, categoria_id: 7, marca_id: 3, fornecedor_id: 1},
      ]);
    });
};
