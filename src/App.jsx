import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="headingtop">
            <img height="80%" src="logo.png" alt="Logo" />
            <h1>Request Account Deletion</h1> <div></div> <div></div>
          </div>
          <div className="content">
            <p>
              We value your privacy and understand that you may wish to delete
              your account and associated data. Please follow the steps below to
              submit a request for account deletion.
            </p>

            <form action="/submit-deletion-request" method="post">
              <label htmlFor="email">Email Address or Username</label>
              <input type="email" id="email" name="email" required />

              <label>
                <input type="checkbox" required />I confirm that I want to
                permanently delete my account and all associated data.
              </label>

              <button type="submit">Submit Request</button>
            </form>

            <section>
              <h2>Data Deletion Information</h2>
              <p>
                Once your request is processed, the following data will be
                permanently deleted:
              </p>
              <ul>
                <li>
                  Personal information such as your name, email address, and
                  phone number.
                </li>
                <li>
                  Activity data, including any records of interactions within
                  the app.
                </li>
                <li>Any other data associated with your account.</li>
              </ul>

              <p>
                Please note that some data may be retained for legal purposes or
                to comply with local regulations.
              </p>
            </section>
          </div>

          <Footer component={"home"}/>
        </div>
      </div>
    </>
  );
}

export default App;
