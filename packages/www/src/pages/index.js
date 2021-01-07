import React, { useEffect, useState } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";
import {Link} from 'gatsby'

export default (props) => {
    
    const [user, setUser] = useState()

  useEffect(() => {
    netlifyIdentity.init({});
    netlifyIdentity.on("login", user => setUser(user))
    netlifyIdentity.on("logout", () => setUser())
  });
  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to='/' p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to='/app' p={2}>
          DashBoard
        </NavLink>
        {user && (
            <NavLink href="#!" p={2}>
                {user.user_metadata.fullname}
            </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};
