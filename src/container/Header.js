import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';

class Header extends Component {
    handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem("username")
        window.location.reload('/')
    };
    render() {
        if (localStorage.getItem("token") === null) {
            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">kitkatsupa</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">コース</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText><Button onClick={() => this.props.history.push("/sign-in")} color="primary">サインイン</Button></NavbarText>
                            <NavbarText><Link to={`/sign-up`}><Button color="secondary" style={{ marginLeft: 10 }}>サインアップ</Button></Link></NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">kitkatsupa</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">コース</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>こんにちは、{localStorage.getItem("username")}さん</NavbarText>
                            <NavbarText><Button color="secondary" style={{ marginLeft: 10 }} onClick={this.handleLogout}>サインアウト</Button></NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            )
        }
    }
}

export default withRouter(Header);
