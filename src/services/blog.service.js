import axios from "axios"; 
 
class BlogService {
    constructor() {
        this.instance = axios.create({
              baseURL: `${process.env.REACT_APP_SERVER_URL}/blog`, 
              withCredentials: true
        })
    } 
    newPost = (blog) => this.instance.post("/image", blog )
} 
 
export default  BlogService; 

