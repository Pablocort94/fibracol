import './App.css';
import React, {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route/*, Link*/ } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import LandingPage from './components/landingpage';
import Footer from './components/footer';


const App = () => {
  // Create references for each section
 const aboutRef = useRef(null);
 const pricingRef = useRef(null);
 const testimonialsRef = useRef(null);
 const landingpageRef = useRef(null);
 const contactRef = useRef(null);
 const footerRef = useRef(null);


 // Function to handle smooth scrolling
 const scrollToSection = (ref) => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth',
    });
  }
};

 return (
   <Router>
     <div>
       <Navbar
         scrollToSection={scrollToSection}
         refs={{ aboutRef, pricingRef, testimonialsRef, landingpageRef, contactRef, footerRef }}
       />
       <div style={{ marginTop: '80px', padding: '20px' }}>
         <Routes>
           <Route
             path="/"
             element={
               <>
                 <section ref={landingpageRef}>
                   <LandingPage scrollToSection={scrollToSection} pricingRef={pricingRef} />
                 </section>
                 <section ref={aboutRef}>
                   <About />
                 </section>
                 <section ref={pricingRef}>
                   <Pricing />
                 </section>
                 <section ref={testimonialsRef}>
                   <Testimonials />
                 </section>
                 <section ref={contactRef}>
                   <Contact />
                 </section>
                 <section ref={footerRef}>
                   <Footer />
                 </section>
               </>
             }
           />
          </Routes>
       </div>
     </div>
   </Router>
 );
};

export default App;
