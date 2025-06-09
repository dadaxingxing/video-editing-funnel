import './App.css';
import CTA from './component/CTA';
import Proof from './component/Proof';
import Cards from './component/Cards';
import Offer from './component/Offer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const offerPoints = [
    'short premium content (10-30s)',
    '24 hours guaranteed delivery',
    'thumbnail design',
    'unlimited revisions',
    'dedicated video editor'
  ];

  const DropDownItem = ({children, href='#'}) => {
    return (
      <div 
        role='button'
        onClick={() => setIsOpen(!isOpen)}
        className='navButtons'
        href={href}
      >
        <a 
          href={href} 
          className='anchor'
        >{children}
        </a>
      </div>
    );
  };

  return (
    <>
      {/* navigation bar */}
      <div className='container-fluid navBar px-0 px-sm-5 d-flex flex-row justify-content-center align-items-center'>
        <div className='col-6 col-lg-4'>
          <div className='logo'>disciplor™</div>
        </div>

        <div className='col-4 d-none d-lg-block'>
          <div className='navButtons d-flex justify-content-center'>
            <DropDownItem href='#about'>About</DropDownItem>
            <DropDownItem>Pricing</DropDownItem>
            <DropDownItem>Newsletter</DropDownItem>
          </div>
        </div>

        <div className='col-6 col-lg-4 d-block d-lg-none'>
          <div className='d-flex justify-content-end'>
            <button 
              className='border-0 bg-transparent p-0 m-0 d-flex align-items-center btn-icon' 
              type='button'
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className='bi bi-list hamburger'></i>
            </button>


          </div>
        </div>

        <div className='col-4 d-none d-lg-flex justify-content-end'>
          <CTA
            width='6rem'
            height='2.5rem' 
          >Sign-up</CTA>
        </div>

      </div>

      <div className={`d-lg-none dropdownMenu ${isOpen ? 'slideDown': ''}`}>
        <DropDownItem href='#about'>About</DropDownItem>
        <DropDownItem>Pricing</DropDownItem>
        <DropDownItem>Newsletter</DropDownItem>
      </div>

      {/* first page */}
      <div className='page1 d-flex flex-column justify-content-center align-items-center text-center'>
        <div className='container'>

          {/* Title */}
          <div className='col-12 mx-auto mb-4 '>
              <div className='p1_title'>We help <u className='highlight'>social media agencies</u> create high quality content through <u className='highlight'>short-form videos.</u></div>
          </div>

          {/* Description  */}
          <div className='col-12 mx-auto mb-4'>
            <div className='p1_text'>Editing premium content that saves you time and goes viral.</div>
          </div>

          {/* CTA button */}
          <div className='col-4 mx-auto d-flex justify-content-center mb-4'>
            <CTA
              height='2.8rem'
              width='7.8rem'
            >Buy Now</CTA>
          </div>

          {/* Proof */}
          <div className="container">
            <div className="row justify-content-center mb-4">

              <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center justify-content-lg-end justify-content-xl-center mb-3">
                <Proof>3+ Years of Growing Pages</Proof>
              </div>

              <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center justify-content-lg-start justify-content-xl-center mb-3">
                <Proof width='clamp(16rem, 44vw, 22rem)'>3500+ Pieces of Content Created</Proof>
              </div>

              <div className="col-12 col-md-12 col-xl-4 d-flex justify-content-center">
                <Proof>35+ Million Views Generated</Proof>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Second page */}
      <div className='page2 container-fluid d-flex flex-column justify-content-center' >


        <div className='row text-center mb-1 mb-lg-4 '>

          <div className='col-12'>
            <div className='p2_title' id='about'>Work Flow</div>
            <div className='p2_paragraph'>what you can expect from us.</div>
          </div>

        </div>


        <div className='row p2_cards justify-content-center'>

          <div className='col-12 col-lg-4 col-xl-3 d-flex justify-content-center'>
            <Cards 
              title='Review'
              paragraph='Indicate the amount of video needed everyday and fill out ways to contact by filling out the form.'
              className=''
            />
          </div>

          <div className='col-12 col-lg-4 col-xl-3 d-flex justify-content-center'>

            <Cards 
              title='Upload'
              paragraph='Upload all footage to us along with any requirements to a google drive.'
            />
          </div>

          <div className='col-12 col-xl-3 d-flex justify-content-center'>
            <Cards 
              title='Revise'
              paragraph='You will review our edit until you are satisfied before we move onto the next video.'
            />
          </div>


        </div>


      </div>

      {/* <CTA
        height='2.8rem'
        width='7.8rem'
      >Buy Now</CTA>

      <div className='d-flex flex-row'>

        
      </div>
      <div className='d-flex flex-row'>

        <Cards 
          title='Review'
          paragraph='Indicate the amount of video needed everyday and fill out ways to contact by filling out the form.'
        />
        <Cards 
          title='Upload'
          paragraph='Upload all footage to us along with any requirements to a google drive.'
        />
        <Cards 
          title='Revise'
          paragraph='You will review our edit until you are satisfied before we move onto the next video.'
        />
        
      </div>

      <Offer
        packages='Standard'
        description='The ideal plan for daily short-form content needs'
        price='$35'
        unit='/video'
        points={offerPoints}
      /> */}
    
    </>


  );
};

export default App;
