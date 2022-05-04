import axios from 'axios';

class PayService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/pay`,
            withCredentials: true
        })
    }
    proceedPay = (pay) =>  this.instance.post("/", pay)
}
export default PayService;