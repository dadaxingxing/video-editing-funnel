import './Offer.css';
import CTA from './CTA';

function Offer({packages, description, price, unit, points}) {
    return (
        <div className='offerFrame d-flex flex-column justify-items-center align-items center'>
            <div className='package'>{packages}</div>
            <div className='description'>{description}</div>
            <div className='priceFrame d-flex flex-row align-items-center'>
                <div className='price'>{price}</div>
                <div className='unit'>{unit}</div>
            </div>
            <CTA>Get Started</CTA>
            <div className='bulletPoint'>{points}</div>
            <ul>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
};

export default Offer;
