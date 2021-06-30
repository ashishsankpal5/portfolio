import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// import './style.css';

const Navbar = () => {
  return (
    <>
      <Box borderBottom="1px solid #c2c0bc">
        <div className="container-fluid nav_bg">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link as={RouterLink} id="ashi" className="navbar-brand" to="/">
                  ASHISH SHANKAR SANKPAL
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        exact
                        as={RouterLink}
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link as={RouterLink} className="nav-link" to="/projects">
                        PROJECTS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        as={RouterLink}
                        className="nav-link"
                        to="/education"
                      >
                        EDUCATION
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link as={RouterLink} className="nav-link" to="/skills">
                        SKILLS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
