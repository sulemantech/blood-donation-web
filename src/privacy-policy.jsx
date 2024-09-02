import React from "react";
import "../index.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="headingtop">
          <h1>Privacy Policy</h1>
        </div>
        <div className="content">
          <p className="bold">LifePlus Mobile App</p>
          <p>
            <strong>Effective Date:</strong> 13-08-2024
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            information:
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email, contact
            number, blood group, and city. We also collect usage data on how you
            use the app, such as interaction with features.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to connect blood donors with those in need,
            and to notify users of blood donation requests that match their
            blood group and location.
          </p>

          <h2>3. Data Sharing</h2>
          <p>
            We share your information with authorized personnel and other users
            as necessary to fulfill blood donation requests. We do not sell or
            rent your personal information to third parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We use industry-standard measures to protect your data, including
            encryption and secure servers. However, no method of transmission
            over the internet is 100% secure.
          </p>

          <h2>5. User Control</h2>
          <p>
            You have the right to request the deletion of your account and
            personal data at any time by contacting us at +92345192780.
          </p>

          <h2>6. Compliance with Laws</h2>
          <p>
            We comply with applicable data protection laws, including GDPR and
            any other relevant regulations.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. You will be notified of
            any significant changes.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            For any questions or concerns, please contact us at +923451927809.
          </p>
        </div>
        <footer>
            <p>
              If you have any questions or need assistance, please contact our
              support team at
              <a href="mailto:info@metafront.net"> info@metafront.net</a>.
            </p>
            <p>
              <Link to="/">Request Account Deletion</Link>  | 
              <Link to="/terms-of-service">Terms & Conditions</Link>  | 
              <Link to="/data-safety-information">Data Safety Information</Link>
            </p>
            <p>&copy; 2024 Life Plus. All rights reserved.</p>
          </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
