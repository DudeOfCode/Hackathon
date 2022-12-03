
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DeepStorage from "./DeepStorage";
import AboutUs from "./AboutUs"
import FAQ from "./FAQ"
const NavBar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/" element={<DeepStorage />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
export default NavBar;