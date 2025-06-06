import './CTA.css';
import { useState } from 'react';


function CTA({children, height='2.5rem', width='5.6rem', radius='.25rem'}) {
    const handleSubmit = () => {
        console.log('Redirecting user to bottom of funnel!')
    };

    return (
            <div 
                role='button' 
                className='btn button_frame d-flex justify-content-center align-items-center' 
                onClick={handleSubmit}
                style={{
                    height,
                    width,
                    borderRadius:radius,
                }}
            >
                <div className='button_text'>{children}</div>
            </div>
    )
};

export default CTA;