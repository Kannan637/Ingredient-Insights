import { Link } from "react-router-dom";
import './Page.css';

export default function Load() {
    return (
        <>
        <div className="container">
      <header>
        <div className="header-1">
          <h1 className="header-text">Ingredient <span className="header-style">Insights</span></h1>
        </div>
        <div className="signup">
        <Link to='/signup'>
              <button className="signup-button">
                <span id="person" className="material-symbols-outlined">person</span>
                Signup
              </button>
            </Link>
        </div>
      </header>
      <section>
        <div className="output">
          <textarea className="main-output" placeholder="Answer..." autoFocus rows="20" autoComplete="off"></textarea>
        </div>
        <div className="searchbox">
          <div className="loader-add">
            <button id="loader-add-2"><span className="material-symbols-outlined">add</span></button>
          </div>
          <textarea id="search-textarea" spellCheck="false" placeholder="Ask Related Question" required></textarea>
          <div className="loader-search-main">
            <Link to="./"><button id="loader-search">
              <svg height="34" width="34" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_2" className="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
            </button></Link>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav-main">
          <div className="nav-search">
            <button id="add"><span className="material-symbols-outlined">add</span></button>
          </div>
          <div className="four-icons-nav">
            <button id="history"><span className="material-symbols-outlined">history</span></button>
            <button id="explore"><span className="material-symbols-outlined">explore</span></button>
            <button id="share"><span className="material-symbols-outlined">share</span></button>
            <button id="logout"><span className="material-symbols-outlined">logout</span></button>
          </div>
        </div>
      </nav>
      <footer>
        <div className="footer-main">
          <div className="footer-main-jus">
            <a href="#"><h3>Pro</h3></a>
            <a href="#"><h3>Enterprise</h3></a>
            <a href="#"><h3>Playground</h3></a>
            <a href="#"><h3>Blog</h3></a>
            <a href="#"><h3>Careers</h3></a>
          </div>
        </div>
      </footer>
    </div>
    <script src="./Share.js"></script>
        </>
    );
}