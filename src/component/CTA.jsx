import './CTA.css';
import { useState } from 'react';


function CTA({children, }) {
    const handleSubmit = () => {
        console.log('Redirecting user to buttom of funnel!')
    };

    return (
            <div role='button' className='btn button_frame d-inline-block' onClick={handleSubmit}>
                <div className='button_text'>{children}</div>
            </div>
    )
};

export default CTA;