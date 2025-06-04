import './App.css';
import CTA from './component/CTA';
import Proof from './component/Proof';
import Cards from './component/Cards';


function App() {

  return (
    <div className='d-flex flex-column'>
      <CTA>monkey</CTA>
      <Proof>add testimonial here</Proof>
      <Proof>add testimonial here</Proof>
      <Proof>add testimonial here</Proof>
      <Cards 
        title='Review'
        paragraph='Indicate the amount of video needed everyday and fill out ways to contact by filling out the form.'
      />
    </div>
  )
}

export default App;
