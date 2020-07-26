import React from 'react';
import Scroll from "./components/scroll/scroll.component";
import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Info from "./components/info/info.component";
import Services from "./components/services/services.component";
import Statistics from "./components/statistics/statistics.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Testimonial from "./components/testimonial/testimonial.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import './App.css';

function App() {
  return (
    <div className="App">
        <Scroll />
        <Navbar />  
        <Header />
        <About />
        <Info />
        <Services />
        <Statistics />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      
        <div class="loading">
            <div id="preloder">
                <div class="loader"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
