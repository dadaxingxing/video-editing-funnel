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
    <div className='d-flex flex-column'>
      <CTA
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
      />
    </div>
  )
}

export default App;
