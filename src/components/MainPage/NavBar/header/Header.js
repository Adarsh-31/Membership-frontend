import React, { useState } from "react";
import "./header.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../../auth";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="main__navbar">
      <div className="main__navbarlogo">
        <img
          alt="logo"
          className="main__navbarimg"
          width="60%"
          src="https://global-uploads.webflow.com/5f3c09d8572b1a3453aa9c1f/5f4e03fcc5a46ecb4a9d99b6_Sparklehood%20logo%20black.png"
        />
      </div>

      <div className="main__navbarlogin">
        <Link to="/signup">
          <Button colorScheme="blue" borderRadius={25} width={130}>
            Signup
          </Button>
        </Link>

        {isAuthenticated() ? (
          <Link to="/founder">
            <Button colorScheme="blue" borderRadius={25} width={150}>
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button colorScheme="blue" borderRadius={25} width={150}>
              Login
            </Button>
          </Link>
        )}
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}
      </div>
    </div>
  );
};

export default Header;
