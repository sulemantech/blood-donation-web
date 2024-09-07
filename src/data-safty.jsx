import React from "react";
import "../index.css";
import Footer from "./Footer";

const DataSafetyInformation = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="headingtop">
          <img height="80%" src="logo.png" alt="Logo" />
          <h1>LifePlus Blood Donation App</h1>
          <div></div> <div></div>
        </div>
        <div className="content">
          <h2 className="bloodreq">Data Safety Information</h2>
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
        <Footer component={"dsi"} />
      </div>
    </div>
  );
};

export default DataSafetyInformation;
