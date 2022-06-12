import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <div className = "button-container">
            <Link to="/">
                <button className="home-button">Go back</button>
            </Link>
        </div>
    )
}

export default HomeButton;