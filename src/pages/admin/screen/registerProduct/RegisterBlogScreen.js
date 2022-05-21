import React from "react"; 
import BlogService from "../../../../services/blog.service"  
import { useState } from "react";    
import "./css/RegisterBlogScreen.css";
import UploadsService from "../../../../services/upload.services";

const RegisterBlogScreen = () => {
     
    let blogService = new BlogService();  
    let uploadsService = new UploadsService();  
    const [form, setForm] = useState({
         title: "", 
         subtitle: "",  
         firstsection: "", 
         secondsection: "", 
         thirdsection: "", 
         fourthsection: "", 
         fifthsection: "", 
         sexthsection: "" 
    })    
    console.log(form)
    const [image, setImage] = useState();         
    console.log(image)   
    const handleChange  = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value})
    }  
  

    const handleSubmit = (e) => {
      e.preventDefault(); 
      let blog = {
        title: form.title, 
        subtitle: form.subtitle, 
        firstsection: form.firstsection, 
        secondsection: form.firstsection, 
        thirdsection: form.thirdsection, 
        fourthsection: form.fourthsection, 
        fifthsection: form.fifthsection, 
        sexthsection: form.sexthsection, 
        images: image
      }  
      console.log(blog)

      blogService 
      .newPost(blog) 
      .then((res) => {
        console.log(res)
      }) 
      .catch(err => console.log(err)); 
    }
   
      
    const handleFile = (e) => {  
      console.log(e)
      const uploadData = new FormData();  
      uploadData.append("photo", e.target.files[0])  
      console.log(uploadData)
      uploadsService.uploadImg(uploadData) 
      .then(res => {  
        console.log(res) 
        setImage(res?.data.cloudinary_url)
      } )  
      .catch(error => {
        console.log("Hubo un error aquí", error)
      })
    }

    

    return (
        <> 
        <div className="container-blog">
          <div className="register-blog"> 
          <h2>Crear un post en el blog</h2>  
            <form onSubmit={handleSubmit}>  
                <label  for="title">Introduce el titulo del post</label> 
                <input name="title" type="text"    id="title" onChange={(e) => handleChange(e)} ></input>      
                <br/>  
                <label for="subtitle">Introduce el subtitulo</label> 
                <input name="subtitle" type="text"    id="subtitle" onChange={(e) => handleChange(e)} ></input>  
                <br/>     
                <label for="firstsection">Introduce primera seccion</label>
               <textarea   name="firstsection" type="text"    id="firstsection" onChange={(e) => handleChange(e)}> 
               </textarea> 
               <label for="secondsection">Introduce segunda seccion</label>
               <textarea   name="secondsection" type="text"    id="secondsection" onChange={(e) => handleChange(e)}> 
               </textarea>  
               <label for="thirdsection">Introduce tercera seccion</label>
               <textarea   name="thirdsection" type="text"    id="thirdsection" onChange={(e) => handleChange(e)}> 
               </textarea> 
               <label for="fourthsection">Introduce cuarta  seccion</label>
               <textarea   name="fourthsection" type="text"    id="fourthsection" onChange={(e) => handleChange(e)}> 
               </textarea>  
               <label for="fifthsection">Introduce quinta  seccion</label>
               <textarea   name="fifthsection" type="text"    id="fifthsection" onChange={(e) => handleChange(e)}> 
               </textarea>   
               <label for="sixsection">Introduce quinta  seccion</label>
               <textarea   name="sixsection" type="text"    id="sixsection" onChange={(e) => handleChange(e)}> 
               </textarea>     
               <input id='imgselect' type="file" name="img"  onChange={(e) => handleFile(e)} placeholder="email address"  required/>
               <label for="author">El nombre de author</label> 
               <input type="text" id="author"></input>  
               <select>
               
               </select>
               <button type="submit">Enviar</button>
            </form>
          </div>
          </div>
        </>
    )
}     

export default RegisterBlogScreen;