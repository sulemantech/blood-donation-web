import React from "react";
import "../index.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

const DataSafetyInformation = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="headingtop">
          <h1>Data Safety Information</h1>
        </div>
        <div className="content">
          <h3>1. Data Collection and Usage</h3>
          <p>
            We collect personal information (Name, Email, Contact Number, Blood
            Group, City) to provide our blood donation services. This data is
            used to connect users with blood donation requests and to notify
            them of relevant opportunities.
          </p>

          <h3>2. Data Sharing</h3>
          <p>
            Your data is shared only with authorized personnel and other users
            for the purpose of blood donation.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement security measures such as encryption to protect your
            data. Access to personal data is restricted to authorized personnel
            only.
          </p>

          <h3>4. User Rights</h3>
          <p>
            You can request the deletion or correction of your personal data by
            contacting us at +923451927809.
          </p>

          <h3>5. Compliance</h3>
          <p>
            We ensure that our data practices comply with relevant laws,
            including GDPR.
          </p>

          <h3>6. Contact Information</h3>
          <p>
            For any questions or concerns regarding data safety, please contact
            us at +923451927809.
          </p>
        </div>
        <footer>
            <p>
              If you have any questions or need assistance, please contact our
              support team at
              <a href="mailto:info@metafront.net "> info@metafront.net</a>.
            </p>
            <p>
              <Link to="/">Request Account Deletion</Link> |
              <Link to="/privacy-policy">Privacy Policy</Link> |
              <Link to="/terms-of-service">Terms & Conditions</Link> |
            </p>
            <p>&copy; 2024 Life Plus. All rights reserved.</p>
          </footer>
      </div>
    </div>
  );
};

export default DataSafetyInformation;
