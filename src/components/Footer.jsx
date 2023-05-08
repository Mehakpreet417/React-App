import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Made with Love by Mehakpreet Chopra.</p>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
