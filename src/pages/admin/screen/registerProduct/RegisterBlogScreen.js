import React from "react"; 
import BlogService from "../../../../services/blog.service"  
import { useState } from "react";    
import "./css/RegisterBlogScreen.css";


const RegisterBlogScreen = () => {
     
    let blogService = new BlogService(); 
 
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
    const handleChange  = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    } 
     
    

    return (
        <> 
        <div className="container-blog">
          <div className="register-blog"> 
          <h2>Crear un post en el blog</h2>  
            <form>  
                <label  for="title">Introduce el titulo del post</label> 
                <input name="title" type="text"    id="title" onChange={(e) => handleChange(e)} required></input>      
                <br/>
                <label for="subtitle">Introduce el subtitulo</label> 
                <input name="subtitle" type="text"    id="subtitle" onChange={(e) => handleChange(e)} required></input>  
                <br/>     
                <label for="firstsection">Introduce primera seccion</label>
               <textarea   name="firstsection" type="text"    id="firstsection" onChange={(e) => handleChange(e)}> 
               </textarea>
            </form>
          </div>
          </div>
        </>
    )
     
} 

export default RegisterBlogScreen;