import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import { SignInPage } from "./Pages/SignInPage";
import { SignUpPage } from "./Pages/SignUpPage";
import './App.css'

// import Dashboard from "./components/Dashboard";
// import Download from "./components/Download";
// import Features from "./components/FeatureListing";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Offers from "./components/Offers";
// import Partner from "./components/Partner";
// import Popular from "./components/PopularListing";
// import Questions from "./components/Questions";
// import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
      </Routes>
    </Router>

    // <>
    // <Header/>
    // <Hero/>
    // <Offers/>
    // <Features/>
    // <Services/>
    // <Popular/>
    // <Partner/>
    // <Questions/>
    // <Download/>
    // <Footer/>
    // <Dashboard/>
    // </>
  );
}

export default App;
