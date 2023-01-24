import React, { useEffect, useState } from 'react'
import BlogService from '../../services/blog.service'
import { Link } from 'react-router-dom'
import './Sewing.css'

export const Sewing = () => {
	const [blog, setBlogs] = useState([])
	console.log(blog)
	const [allBlogs, setAllBlogs] = useState([])
	const [filteredBlogs, setFilteredBlogs] = useState()
	console.log(filteredBlogs, 'soy filtrado')
	let blogService = new BlogService()
	const getBlogs = () => {
		blogService.getBlogs().then((data) => {
			setBlogs(data?.data)
			setAllBlogs(data?.data)
			setFilteredBlogs(data?.data)
		})
	}
	useEffect(() => {
		getBlogs()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange = (e) => {
		const handleBlogCategory = blog.filter((blog) => blog?.categories === e.target.id)
		setFilteredBlogs(handleBlogCategory)
	}

	const handleAll = () => {
		setFilteredBlogs(allBlogs)
	}

	return (
		<div className="blogs-container">
			<div className="blog-content-buttons">
				<button onClick={handleAll}>Todo</button>
				<button id="Confección a Medida" onClick={handleChange}>
					Confección a Medida
				</button>
				<button id="Producción de colecciones" onClick={handleChange}>
					Producción de colecciones
				</button>
				<button id="Arreglos" onClick={handleChange}>
					Arreglos
				</button>
				<button id="Transformaciones" onClick={handleChange}>
					Transformaciones
				</button>
			</div>
			<div className="blog-content-container">
				{filteredBlogs?.map((blog) => {
					console.log(blog)
					return (
						<>
							<div className="blog-content-content">
								<div className="blog-content-image">
									{' '}
									<img src={blog?.images[0]} alt="imagen"></img>{' '}
								</div>
								<div className="blog-content-text">
									<h4>{blog.title}</h4>
									<p maxlength="50">{blog?.firstsection.substring(0, 60)}.......</p>
									<Link to={`/post/${blog?._id}`}>
										<p>Seguir leyendo</p>
									</Link>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</div>
	)
}
