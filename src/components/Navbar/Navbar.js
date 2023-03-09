import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.css'

export const Navbar=()=>{
    return (
        <header className="header"> 
            <div className="header_container">
                <h1 className="header_logo">Logo</h1>

                <nav className="navbar">
                    <p className="navbar_link" >Inicio</p>
                    <p className="navbar_link" >Productos </p>
                    <p className="navbar_link" >Nosotros</p>
                    <CartWidget></CartWidget>
                </nav>
            </div>
        </header>
    )
}