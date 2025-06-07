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
      <div className='container-fluid navBar d-flex flex-row justify-content-center align-items-center'>
        <div className='col-4 col-md-3'>
          <div className='logo'>disciplor™</div>
        </div>

        <div className='col-4 col-md-6'>
          <div className='nagButtons d-flex justify-content-center'>
            <div>About</div>
            <div>Pricing</div>
            <div>Newsletter</div>
          </div>
        </div>

        <div className='col-4 col-md-3 justify-content-end'>
          <CTA
           width='6rem'
           height='2.5rem' 
          >Sign-up</CTA>
        </div>

      </div>

      <div className='page1 d-flex flex-column justify-content-center align-items-center'>

        {/* <CTA
          height='2.8rem'
          width='7.8rem'
        >Buy Now</CTA>

        <div className='d-flex flex-row'>

          <Proof>add testimonial here</Proof>
          <Proof>add testimonial here</Proof>
          <Proof>add testimonial here</Proof>
          
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
      </div>
    
    </>


  )
}

export default App;
