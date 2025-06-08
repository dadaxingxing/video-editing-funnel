import './App.css';
import CTA from './component/CTA';
import Proof from './component/Proof';
import Cards from './component/Cards';
import Offer from './component/Offer';

function App() {
  const offerPoints = [
    'short premium content (10-30s)',
    '24 hours guaranteed delivery',
    'thumbnail design',
    'unlimited revisions',
    'dedicated video editor'
  ]


  return (
    <>
      {/* navigation bar */}
      <div className='container-fluid navBar d-flex flex-row justify-content-center align-items-center'>
        <div className='col-4'>
          <div className='logo'>disciplor™</div>
        </div>

        <div className='col-4'>
          <div className='navButtons d-flex justify-content-center'>
            <div>About</div>
            <div>Pricing</div>
            <div>Newsletter</div>
          </div>
        </div>

        <div className='col-4 d-none d-lg-flex justify-content-end'>
          <CTA
            width='6rem'
            height='2.5rem' 
          >Sign-up</CTA>
        </div>

      </div>

      {/* first page */}
      <div className='page1 d-flex flex-column justify-content-center align-items-center text-center'>
        <div className='container p1_filter'>

          <div className='col-12 mx-auto mb-4'>
              <div className='p1_title'>We help <u className='highlight'>social media agencies</u> create high quality content through <u className='highlight'>short-form videos.</u></div>
          </div>

          <div className='col-12 mx-auto mb-4'>
            <div className='p1_text'>Editing premium content that saves you time and goes viral.</div>
          </div>

          <div className='col-4 mx-auto d-flex justify-content-center mb-4'>
            <CTA
              height='2.8rem'
              width='7.8rem'
            >Buy Now</CTA>
          </div>

          <div className='d-flex flex-row justify-content-center mb-4 p1_proof_container'>
            <Proof>3+ Years of Growing Pages</Proof>
            <Proof>3500+ Pieces of Content Created</Proof>
            <Proof>35+ Million Views Generated</Proof>
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
      />
     */}
    </>


  )
}

export default App;
