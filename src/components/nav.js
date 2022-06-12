import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "nav">
            <ul className = "nav__menu">
                <Link to="/about"><li className = "nav__menu--item">About</li></Link>
                <Link to="/work"><li className = "nav__menu--item">Work</li></Link>
                <Link to="/contact"><li className = "nav__menu--item">Contact Me</li></Link>
                <Link to="/fun"><li className = "nav__menu--item">Just for fun</li></Link>
            </ul>
        </div>
    )
}

export default Navigation;