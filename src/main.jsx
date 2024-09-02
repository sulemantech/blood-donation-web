import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivacyPolicy from './privacy-policy';
import TermsConditions from './terms-n-conditions';
import DataSafetyInformation from './data-safty';
import '../index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsConditions />,
  },
  {
    path: "/data-safety-information",
    element: <DataSafetyInformation />,
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
