import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ProdutosService {

    constructor(){}

    getProdutos() {
        const url = `${API_URL}/notemarket/produtos/`;
        return axios.get(url).then(response => response);
    }
    getProdutosByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getProduto(id) {
        const url = `${API_URL}/notemarket/produtos/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteProduto(produto) {
        const url = `${API_URL}/notemarket/produtos/${produto.id}/`;
        return axios.delete(url);
    }
    createProduto(produto) {
        const url = `${API_URL}/notemarket/produtos/`;
        return axios.post(url, produto);
    }
    updateProduto(produto) {
        const url = `${API_URL}/notemarket/produtos/${produto.id}/`;
        return axios.put(url, produto);
    }
}