import "../Footer/Footer.styles.css";
import search from "../../assets/img/search.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <br></br>
        <NavLink to='/myorder' className={({ isActive }) => (
                        isActive ? 
                        'nav-active-float' : 
                        'nav-inactive-float')}><img className="" width="50px" src={search}></img>Busque su Orden
        </NavLink>
        <br></br>
        <br></br>
        <div className="leyenda">
        <img src="https://avatars.githubusercontent.com/u/107081885?v=4" width="100px"/>
        <br></br>
        <i>Sitio desarrollado como trabajo final para el curso de REACT JS de CODERHOUSE.</i>
        </div>
       
        <div className="footer-bottom">
        <ul className="socials">
            <li>David Luque</li>
            <li><a href="https://github.com/Deivlu"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/luquedavid/"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
        </div>
        <p>Copyright &copy;2023 <a href="https://github.com/Deivlu">David Luque</a>  </p>

    </div>
    </footer>
  )
}

export default Footer