import axios from 'axios'

class UploadService {

    constructor(){

        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/uploads`,

        })
    }
    uploadImg = (imageForm) => this.instance.post("/image", imageForm)
}

export default UploadService;