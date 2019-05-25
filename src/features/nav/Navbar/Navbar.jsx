import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link,withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class Navbar extends Component {
  state = {
    authenticated: false
  };
  handleSiginedIn = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignedOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu   inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to='/test' name='TestArea'/>
          {authenticated &&
          <Menu.Item as={NavLink} to="/people" name="People" />}
          {authenticated && 
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu signedOut={this.handleSignedOut} />
          ) : (
            <SignedOutMenu signedIn={this.handleSiginedIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(Navbar);