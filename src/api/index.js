import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:4000/'})

export const getAllProducts = () => api.get('/products/')
export const searchAllProducts = data => api.get('/products/keywords/' + data)
export const getProduct = _id => api.get('/products/' + _id)

const apis = {
	getAllProducts,
	searchAllProducts,
	getProduct
}

export default apis