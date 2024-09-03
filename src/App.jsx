import { useState } from "react";
import "../index.css";
import Footer from "./Footer";
import InfoModal from "./InfoModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(true);

    const email = e.target.email.value;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_PROD_URl}delete-user?email=${encodeURIComponent(email)}`,
        {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_API_KEY,
          },
        }
      );
      const result = await response.text();

      if (response.ok) {
        setModalMessage(
          result ||
            `The account associated with ${email} has been successfully deleted.`
        );
      } else {
        console.log(response);
        setModalMessage(result || `Unexpected Error occurred`);
      }
    } catch (error) {
      setModalMessage(`An error occurred: ${error.message}`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage(""); // Reset the modal message when closing
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="headingtop">
            <img height="80%" src="logo.png" alt="Logo" />
            <h1>Request Account Deletion</h1>
            <div></div> <div></div>
          </div>
          <div className="content">
            <p>
              We value your privacy and understand that you may wish to delete
              your account and associated data. Please follow the steps below to
              submit a request for account deletion.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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

          <Footer component={"home"} />
        </div>
      </div>

      {/* InfoModal Component */}
      <InfoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message={modalMessage}
      />
    </>
  );
}

export default App;
