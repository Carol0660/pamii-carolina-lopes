const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, nome: 'Teclado Mecânico', preco: 250.0, estoque: 15 },
  { id: 2, nome: 'Mouse Gamer', preco: 120.0, estoque: 30 },
];
let nextId = 3;

/**
 * GET /product
 * Lista todos os produtos.
 */
app.get('/product', (req, res) => {
  res.status(200).json(products);
});

/**
 * GET /product/:id
 * Busca um único produto pelo id.
 */
app.get('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
});

/**
 * POST /product
 * Cria um novo produto.
 */
app.post('/product', (req, res) => {
  const { nome, preco, estoque } = req.body;

  if (!nome || preco === undefined) {
    return res.status(400).json({ erro: 'Campos "nome" e "preco" são obrigatórios' });
  }

  const novoProduct = {
    id: nextId++,
    nome,
    preco,
    estoque: estoque ?? 0,
  };

  products.push(novoProduct);

  return res.status(201).json(novoProduct);
});

/**
 * PUT /product/:id
 * Atualiza um produto POR INTEIRO (exige todos os campos).
 */
app.put('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  const { nome, preco, estoque } = req.body;

  if (!nome || preco === undefined || estoque === undefined) {
    return res
      .status(400)
      .json({ erro: 'PUT exige o objeto completo: "nome", "preco" e "estoque"' });
  }

  products[index] = { id, nome, preco, estoque };

  return res.status(200).json(products[index]);
});

/**
 * PATCH /product/:id
 * Atualiza um produto PARCIALMENTE (só os campos enviados).
 */
app.patch('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  Object.assign(product, req.body);

  return res.status(200).json(product);
});

/**
 * DELETE /product/:id
 * Remove um produto.
 */
app.delete('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  products.splice(index, 1);

  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`API de produtos rodando em http://localhost:${PORT}`);
});