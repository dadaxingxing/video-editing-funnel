import './CTA.css';
import { useState, useEffect } from 'react';



function CTA({children, height='2.5rem', width='5.6rem', radius='.25rem', font_size='1.25rem'}) {
    const [showForm, setShowForm] = useState(false);
    const handleSubmit = () => {
        window.open("https://tally.so/r/mR6Vo4", "_blank");
    };

    return (
        <div 
            role='button' 
            className='btn button_frame d-flex justify-content-center align-items-center' 
            onClick={handleSubmit}
            style={{
                height,
                width,
                borderRadius: radius,
                fontSize: font_size,
            }}
        >
            <div className='button_text'>{children}</div>
        </div>
    )
};

export default CTA;