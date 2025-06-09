import './Offer.css';
import CTA from './CTA';

function Offer({packages, description, price, unit, points}) {
    return (
        <div className='offerFrame d-flex gap-3 flex-column justify-items-center align-items-start py-3 px-2 p-md-5'>
            <div className='package'>{packages}</div>
            <div className='description'>{description}</div>
            <div className='priceFrame d-flex flex-row align-items-center'>
                <div className='price'>{price}</div>
                <div className='unit'>{unit}</div>
            </div>
            <CTA 
                className='CTA '
                height='4rem'
                width='100%'
                radius='1rem'
            >Get Started</CTA>
            <ul className='bulletPoints'>
                {points.map((point, index) => (
                    <li className='point' key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
};

export default Offer;
