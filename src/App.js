import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextButtonSection from './Components/TextButtonSection'; 
import FullImage from  './Components/FullImage';

import ImageRow from './Components/ImageRow';

import TextHeadingParagraph from './Components/TextHeadingParagraph';
import SectionThreeCards from './Components/SectionThreeCards';
 import SectionOne from './Components/SectionOne';
import Testimonial from './Components/Testimonial'; 
import Container from './Components/Container'; 
import FAQ from './Components/FAQ'; 
import Blog from './Components/Blog';
import SectionButton from "./Components/SectionButton";
 import Footer from './Components/Footer'; 







function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div id="home" style={{ padding: '100px 20px' }}>
        
      </div>
      <div id="about" style={{ padding: '100px 20px' }}>
       
      </div>
      <div id="services" style={{ padding: '100px 20px' }}>
       
      </div>
      <div id="contact" style={{ padding: '100px 20px' }}>
       
      </div> */}
      <TextButtonSection/>
      <FullImage/>
    <ImageRow/>
    <TextHeadingParagraph/>
    <SectionThreeCards/>
    <SectionOne/>
    <Testimonial/>
    <Container/>
    <FAQ/>
    <Blog/>

    
    
<SectionButton/>
      <Footer /> {/* Footer component */}

   
  



 
     
{/* Add other sections/components here */}

    </div>
  );
}

export default App;
