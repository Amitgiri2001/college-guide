import React from "react";
import Img from '../Images/Career_logo.png';

function Nav() {
    return (<div>
        {/* <!-- Nav Bar --> */}
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark main-nav">
            <div class="container-fluid main-nav">
                <a class="navbar-brand" href="#"
                ><img class="d-inline-block align-text-top" src={Img} width="50px" hight="50px" />
                    Career Guide
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#features"
                            >Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="#features"
                            >AboutUs
                            </a>
                        </li>

                        <li class="nav-item dropdown popular">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Popular Career
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">Engineering</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Medical</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">General</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Commerce</a>
                                </li>
                                <li><a class="dropdown-item" href="#">Govt.</a></li>
                                <li></li>
                                <li>
                                    <a class="dropdown-item" href="#footer">Contact Us</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Other Options</a>
                                </li>
                            </ul>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    <form class="form-inline nav_search">
                        <input class="form-control mr-sm-2 col-lg-8" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>)
}
export default Nav;