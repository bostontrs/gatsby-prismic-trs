import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const NavbarContainer = styled("nav")`
    padding: 10px 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    transition: opacity 0.25s,transform 0.25s;
    will-change: opacity,transform;
    background-color: rgba(255,255,255,0.97);
    border-bottom: 1px solid rgba(46,46,46,0.1);
    background-clip: padding-box;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        &.is-active {
        }
    }
`

const NavbarWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3.25rem;
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    max-width: 1140px;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: block;
    }
`

const NavbarBrand = styled("div")`
    flex-shrink: 0;
    align-items: center;
    display: flex;
    min-height: 3.25rem;
    .logo {
        display: flex;
        align-items: center;
        flex-grow: 0;
        flex-shrink: 0;
        position: relative;
        padding: 10px;
        svg {
            height: auto;
            max-height: 3.75rem;
            max-width: 100%;
            width: 200px;
            display: block;
            position: relative;
            @media(max-width: ${dimensions.maxwidthMobile}px) {
                width: 150px;
            }
        }
    }
    .navbar-burger {
        display: none;
        color: #4a4a4a;
        cursor: pointer;
        height: 3.25rem;
        position: relative;
        width: 3.25rem;
        margin-left: auto;
        &:hover {
            background-color: rgba(0,0,0,.05);
        }
        span {
            background-color: currentColor;
            display: block;
            height: 1px;
            left: calc(50% - 8px);
            position: absolute;
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transition-duration: 86ms;
            transition-duration: 86ms;
            -webkit-transition-property: background-color,opacity,-webkit-transform;
            transition-property: background-color,opacity,-webkit-transform;
            transition-property: background-color,opacity,transform;
            transition-property: background-color,opacity,transform,-webkit-transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            width: 16px;
            &:first-child {
                top: calc(50% - 6px);
            }
            &:nth-child(2) {
                top: calc(50% - 1px);
            }
            &:nth-child(3) {
                top: calc(50% + 4px);
            }
        }
        &.is-active {
            span {
                &:first-child {
                    -webkit-transform: translateY(5px) rotate(45deg);
                    transform: translateY(5px) rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    -webkit-transform: translateY(-5px) rotate(-45deg);
                    transform: translateY(-5px) rotate(-45deg);
                }
            }
        }
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: block;
        }
    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
    }
`

const NavbarMenu = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    ul {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;
        justify-content: flex-end;
        padding-left: 0;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            flex-flow: column nowrap;
        }
        li {
            font-family: Gelasio;
            font-size: 1.2rem;
            font-weight: 500;
            flex: 0 0 auto;
            margin: 0 15px;
            list-style-type: none;
            text-align: center;
            @media (max-width: ${dimensions.maxwidthTablet}px) {
                border: none;
                margin: 10px 0;
            }
            a {
                color: #2e2e2e;
                background-image: linear-gradient(to bottom,#e5e5e5,#e5e5e5);
                background-repeat: repeat-x;
                background-size: 1px 1px;
                background-position: 0 1.3em;
                padding-bottom: 10px;
                margin-bottom: -10px;
                text-decoration: none;
                &:after {
                    position: absolute;
                    content: "";
                    bottom: 0;
                    width: 18px;
                    height: 3px;
                    background: transparent;
                    bottom: -3px;
                    right: 50%;
                    margin-right: -9px;
                    transition: 100ms ease-in-out background;
                }
                
                &:hover {
                    background-image: linear-gradient(to bottom,#bdbdbd,#bdbdbd);
                    background-repeat: repeat-x;
                    background-size: 1px 1px;
                    background-position: 0 1.3em;
                    padding-bottom: 10px;
                    margin-bottom: -10px;
                    text-decoration: none;
                }
            }
            @media(min-width: ${dimensions.maxwidthTablet}px) {
            }
        }
    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: none;
        &.is-active {
            display: block;
        }
    }
`
const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarActiveClass: "",
            showMobileNavigation: "hidden",
        }
    }

    toggleMenu() {
        this.setState({ 
            showMobileNavigation: !this.state.showMobileNavigation,
        }, () => {
            this.state.showMobileNavigation
                ? this.setState({
                    navbarActiveClass: 'is-active'
                })
                : this.setState({
                    navbarActiveClass: "",
                })
        })
    }

    render() {
        return (
            <NavbarContainer className={this.state.navbarActiveClass}>
                <NavbarWrapper>
                    <NavbarBrand>
                        <Link 
                            to="/"
                            className="logo">
                            <Logo/>
                        </Link>
                        <div
                            className={`navbar-burger burger ${this.state.navbarActiveClass}`}
                            onClick={() => this.toggleMenu()}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </NavbarBrand>
                    <NavbarMenu className={`${this.state.navbarActiveClass}`}>
                        <ul>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/team">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/blog">
                                    Blog
                                </Link>

                            </li>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/donate">
                                    Donate
                                </Link>
                            </li>
                        </ul>
                    </NavbarMenu>

                </NavbarWrapper>
        </NavbarContainer>            
        );
    }
}

export default Navbar;