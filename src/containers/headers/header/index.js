import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="container">
                    <div id="logo" className="pull-left">                   
                        <h1><a href="index.html">Reve<span>al</span></a></h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                        <li className="menu-active"><a href="index.html">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li className="menu-has-children"><a href>Drop Down</a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            <li><a href="#">Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    </div>
                </header>
            </div>
        )
    }
}
