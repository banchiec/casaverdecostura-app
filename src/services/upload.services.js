import axios from 'axios';

class UploadsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/uploads`,
            withCredentials: false
        })
    }
    uploadImg = (imageForm) => this.instance.post("/image", imageForm)
    uploadImgProfile = (imageForm) => this.instance.post("/profile", imageForm)

}
export default UploadsService;