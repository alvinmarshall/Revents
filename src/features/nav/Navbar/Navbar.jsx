import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../modals/modalActions";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { LoginModal, RegisterModal } from "../../modals/ModalConstant";
import { logOut } from "../../auth/authActions";

const mapState = state => ({
  auth: state.auth
});
const actions = {
  openModal,
  logOut
};
class Navbar extends Component {
  handleSiginedIn = () => {
    this.props.openModal(LoginModal);
  };

  handleRegister = () => {
    this.props.openModal(RegisterModal);
  };

  handleSignedOut = () => {
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="TestArea" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu
              currentUser={auth.currentUser}
              signedOut={this.handleSignedOut}
            />
          ) : (
            <SignedOutMenu
              signedIn={this.handleSiginedIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(
  connect(
    mapState,
    actions
  )(Navbar)
);
