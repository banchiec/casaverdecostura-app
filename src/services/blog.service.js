import axios from "axios"; 
 
class BlogService {
    constructor() {
        this.instance = axios.create({
              baseURL: `${process.env.REACT_APP_SERVER_URL}/blog`, 
              withCredentials: false
        })
    } 
    newPost = (blog) => this.instance.post("/new", blog )
  
} 
 
export default  BlogService; 

