import './CTA.css';
import { PopupButton } from '@typeform/embed-react';


function CTA({children, height='2.5rem', width='5.6rem', radius='.25rem', fontSize='1.25rem'}) {

    return (
        <PopupButton
            id="daeQ7EP9"
            size={100}
            className="btn button_frame d-flex justify-content-center align-items-center"
            style={{
                height,
                width,
                borderRadius: radius,
                fontSize,
            }}
            onClose={() => {
                document.body.style.overflow = 'auto';
            }}
        >
            {children}
        </PopupButton>

    )
};

export default CTA;