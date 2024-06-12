import React from 'react'
import './NavbarComponent.css'
import   {assets}   from '../../assets'

export const NavbarComponent = () => {
    return (
	<div className='header_navbar'>
		<div className='logo_container'>
			<a href='shop.html'>
				<img src={assets.logo_color} className='logo' alt="logo"></img>
			</a>
		</div>
		<div>
			<ul id='navbar'>
				<li>
					<a className="active" href='index.html'>Comprar</a>
				</li>
				<li>
					<a href='shop.html'>Alquilar</a>
				</li>
				<li>
					<a href='blog.html'>Temporal</a>
				</li>
				<li>
					<a href='about.html'>Proyectos</a>
				</li>
			</ul>
		</div>
		{/* <div className='login_section'>
			<button type="button" className="btn btn-remix btn-lg">
				Iniciar Sesión
			</button>
		</div> */}
	</div>
    )
}