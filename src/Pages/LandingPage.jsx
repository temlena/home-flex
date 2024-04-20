import Download from "../components/Download";
import Features from "../components/FeatureListing";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Partner from "../components/Partner";
import Popular from "../components/PopularListing";
import Questions from "../components/Questions";
import Services from "../components/Services";

export default function LandingPage(){
return(
    <>
    <Header/>
    <Hero/>
    <Offers/>
    <Features/>
    <Services/>
    <Popular/>
    <Partner/>
    <Questions/>
    <Download/>
    <Footer/>
    </>
)
}