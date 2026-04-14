import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ServiceDetail from './Components/ServiceDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FloatingContact from './Components/FloatingContact';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Terms from './Components/Terms';
import CookiePolicy from './Components/CookiePolicy';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <Router>
      <div className="font-sans text-slate-100 bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={
            <>
             
              <ServiceDetail />
              <Footer />
              <FloatingContact />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
              <FloatingContact />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Navbar />
              <Terms />
              <Footer />
              <FloatingContact />
            </>
          } />
           <Route path="/cookie" element={
            <>
              <Navbar />
              <CookiePolicy />
              <Footer />
              <FloatingContact />
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
      
        </Routes>
       
      </div>
    </Router>
  );
}




export default App;