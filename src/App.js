import './css/app.css';
import Main from "./components/main.js";
import { AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";
import Navigation from "./components/nav.js";
import Stars from "./components/stars.js"

function App() {
  return (
    <div className="App">
      <Stars>
        <header className="App-header">
          <a href="https://www.linkedin.com/in/joshbayley12/" className="social-link"><AiFillLinkedin/></a>
          <a href="https://github.com/JoshBayley1" className="social-link"><AiOutlineGithub/></a>
          <Navigation/>
        </header>
        <Main/>
      </Stars>
    </div>
  );
}

export default App;
