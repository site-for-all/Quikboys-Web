import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { PartnerPage } from './pages/PartnerPage';
import DriverOnboardingPage from './pages/DriverOnboardingPage';
import HubCaptainPage from './pages/HubCaptainPage';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { RiderAgreement } from './components/legal/RiderAgreement';
import { CookiePolicy } from './components/legal/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/driver-onboarding" element={<DriverOnboardingPage />} />
            <Route path="/hub-captain" element={<HubCaptainPage />} />
            <Route path="/partner-with-us" element={<PartnerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/rider-agreement" element={<RiderAgreement />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
