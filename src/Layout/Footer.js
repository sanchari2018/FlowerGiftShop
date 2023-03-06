import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerClassName = `text-centre bg-success text-white text-uppercase fixed-bottom p-2 d-flex justify-content-center ${
    isScrolled ? "small-footer" : ""
  }`;

  return (
    <Container fluid tag="footer" className={footerClassName}>
      Have a Beauti'flower' day!!
    </Container>
  );
};

export default Footer;
