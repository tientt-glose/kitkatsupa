import React, { Component} from 'react';
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
    render() {
        
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">kitkatsupa</NavbarBrand>
                    <NavbarToggler/>
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
}

export default withRouter(Header);
