import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:4000/'})

const apis = {
	getAllProducts: () => api.get('/products/'),
	searchAllProducts: data => api.get('/products/keywords/' + data),
	getProduct: _id => api.get('/products/' + _id),

	getAllCategories: () => api.get('/categorias/'),
	getAllFornecedores: () => api.get('/fornecedores/'),
	getAllMarcas: () => api.get('/marcas/'),
}

export default apis