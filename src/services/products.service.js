import axios from 'axios';
class ProductsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/products`,
        })
    }                                
    deleteProduct = (id) => this.instance.delete(`/${id}`)
    getProducts = () => this.instance.get("/")   
    getOneProduct = (id) => this.instance.get(`/${id}`) 
    createProduct = (product) => this.instance.post("/", product)  
}
export default ProductsService; 