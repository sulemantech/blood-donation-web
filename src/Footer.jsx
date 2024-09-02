import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Footer({ component }) {
  return (
    <div>
      <footer>
        <p>
          If you have any questions or need assistance, please contact our
          support team at
          <a href="mailto:info@metafront.net "> info@metafront.net</a>.
        </p>
        <p>
          {component != "home" && <Link to="/">Request Account Deletion</Link>} |
          {component != "pp" && (
            <Link to="/privacy-policy">Privacy Policy</Link>
          )}{" "}
          |
          {component != "tos" && (
            <Link to="/terms-of-service">Terms & Conditions</Link>
          )}{" "}
          |
          {component != "dsi" && (
            <Link to="/data-safety-information">Data Safety Information</Link>
          )}
        </p>
        <p>&copy; 2024 Life Plus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
