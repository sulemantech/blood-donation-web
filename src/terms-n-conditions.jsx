import React from 'react';
import '../index.css'; 
import Footer from './Footer';

const TermsConditions = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <div className="headingtop">
            <img height="80%" src="logo.png" alt="Logo" />
            <h1>LifePlus Blood Dontaion App</h1>
            <div></div> <div></div>
          </div>
        <div className="content">
          <h2 className="bloodreq">Terms & Conditions</h2>
          <h2>LifePlus Blood Donation App</h2>
          <p><strong>Effective Date:</strong> 13-08-2024</p>
          <p>Welcome to the LifePlus application. By using our app, you agree to the following Terms & Conditions:</p>

          <h2 className="bold">1. Acceptance of Terms</h2>
          <p>By registering and using the app, you agree to these Terms & Conditions. If you do not agree, please do not use the app.</p>

          <h2 className="bold">2. User Responsibilities</h2>
          <p>You must provide accurate and up-to-date information during registration. You agree not to misuse the app, including but not limited to using it for unauthorized or unlawful purposes.</p>

          <h2 className="bold">3. Data Collection and Use</h2>
          <p>We collect personal information (Name, Email, Contact Number, Blood Group, City) to facilitate blood donation requests and connect donors with recipients. Your data will be used solely for these purposes.</p>

          <h2 className="bold">4. Data Sharing</h2>
          <p>Your data may be shared with authorized personnel of the LifePlus Center and with other registered users in case of a blood donation request.</p>

          <h2 className="bold">5. Account Termination</h2>
          <p>We reserve the right to terminate or suspend your account if we believe you have violated these Terms & Conditions.</p>

          <h2 className="bold">6. Updates to the Terms</h2>
          <p>We may update these Terms & Conditions from time to time. You will be notified of any significant changes, and your continued use of the app constitutes acceptance of those changes.</p>

          <h2 className="bold">7. Limitation of Liability</h2>
          <p>The app is provided as is without any warranties, express or implied. We are not liable for any damages arising from the use or inability to use the app.</p>

          <h2 className="bold">8. Contact Information</h2>
          <p>For any questions or concerns, please contact us at +923451927809.</p>
        </div>
        <Footer component={"toc"}/>
      </div>
    </div>
  );
};

export default TermsConditions;
