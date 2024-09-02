import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Page.css';

function Home() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  useEffect(() => {
    const handleShare = () => {
      if (navigator.share) {
        navigator.share({
          title: '#',
          url: 'http://localhost:3000/'
        }).then(() => {
          console.log('Thanks for sharing!');
        }).catch(err => {
          console.log("Error while using Web share API:");
          console.log(err);
        });
      } else {
        alert("Browser doesn't support this API!");
      }
    };

    const shareButton = document.querySelector('#shareBtn');
    shareButton.addEventListener('click', handleShare);
    return () => {
      shareButton.removeEventListener('click', handleShare);
    };
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="container">
        <header>
          <div className="header-1">
            <h1 className="header-text">Ingredient <span className="header-style">Insights</span></h1>
          </div>
          <div className="signup">
            <Link to='./Signup'>
              <button className="signup-button">
                <span id="person" className="material-symbols-outlined">person</span>
                Signup
              </button>
            </Link>
          </div>
        </header>
        <section>
          <div className="content">
            <h1 className="title">Know your Ingredients</h1>
            <p className="title-p">Harmchecker</p>
            <div className="inputbox">
              <textarea autoFocus placeholder="Know your ingredients...." rows="8" autoComplete="off" required></textarea>
              <div className="icons-main">
                <div className="icons-main-below">
                  <input type="file" className="input-file-link" />
                  <span className="material-symbols-outlined">folder</span>
                  <h4 className="upload">Upload</h4>
                  <input type="#" className="input-file-link" />
                  <span className="material-symbols-outlined">filter_center_focus</span>
                  <h4 className="upload">Scan</h4>
                </div>
                <div className="search-main">
                  <div className="search">
                    <Link to="/load">
                      <button id="search-1">
                        <svg height="34" width="34" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                        </svg>
                        <span className="text"><h3>Generate</h3></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="example">
                <span id="example-search" className="material-symbols-outlined">output</span>
                <h5 className="try">Try searching</h5>
                <h5 className="ex">💉Lorem ipsum dolor sit amet</h5>
                <h5 className="ex">🍀Lorem ipsum dolor sit amet</h5>
                <h5 className="ex">🤮Lorem ipsum dolor sit amet</h5>
                <h5 className="ex">🍑Lorem ipsum dolor sit amet</h5>
              </div>
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
              <button id="shareBtn"><span className="material-symbols-outlined">share</span></button>
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
    </>
  );
}

export default Home;
