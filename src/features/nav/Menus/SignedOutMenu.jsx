import React from "react";
import { Menu, Button } from "semantic-ui-react";
const SignedOutMenu = ({signedIn,register}) => {
  return (
    <Menu.Item position="right">
        <Button onClick={signedIn} basic inverted content="Login" />
        <Button
          basic
          inverted
          content="Register" onClick={register}
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
  );
};

export default SignedOutMenu;
