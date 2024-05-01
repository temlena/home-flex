import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import { SignInPage } from "./Pages/SignInPage";
import { SignUpPage } from "./Pages/SignUpPage";
import './App.css'
import { AboutHomeflexPage } from "./Pages/AboutHomeflexPage";
import { PrivacyPolicyPage } from "./Pages/PrivacyPolicyPage";
import { ContactPage } from "./Pages/ContactPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/AboutHomeflexPage" element={<AboutHomeflexPage />} />
        <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
