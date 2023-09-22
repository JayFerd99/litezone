import React from "react";
import Layout from "../Components/Layout/Index";
import HeroSection from "../Components/Sections/HeroSection";
import CryptocurrencySection from "../Components/Sections/CryptocurrencySection";
import BuyTradeSection from "../Components/Sections/BuyTradeSection";
import PartnerSection from "../Components/Sections/PartnerSection";
import CreditCardSection from "../Components/Sections/CreditCardSection";
import TradingToolsSection from "../Components/Sections/TradingToolsSection";
import SecuritySection from "../Components/Sections/SecuritySection";
import StepSection from "../Components/Sections/StepSection";
import FinalSection from "../Components/Sections/FinalSection";
import BackToTopSection from "../Components/Sections/BackToTopSection";
import Footer from "../Components/Footer";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyTradeSection />
      <PartnerSection />
      <CreditCardSection />
      <TradingToolsSection />
      <SecuritySection />
      <StepSection />
      <FinalSection />
      <BackToTopSection />
      <Footer />
    </Layout>
  );
}
