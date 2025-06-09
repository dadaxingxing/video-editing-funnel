import './Offer.css';
import CTA from './CTA';

function Offer({packages, description, price, unit, points}) {
    return (
        <div className='offerFrame d-flex gap-5 flex-column justify-items-center align-items-start py-4 px-3 p-md-5'>
            <div className='package mb-2'>{packages}</div>
            <div className='description mb-2'>{description}</div>
            <div className='priceFrame d-flex flex-row align-items-center mb-2'>
                <div className='price'>{price}</div>
                <div className='unit'>{unit}</div>
            </div>
            <CTA 
                className='CTA '
                height='4rem'
                width='100%'
                radius='1rem'
            >Get Started</CTA>
            <ul className='bulletPoints mt-2 mt-lg-5'>
                {points.map((point, index) => (
                    <li className='point' key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
};

export default Offer;
