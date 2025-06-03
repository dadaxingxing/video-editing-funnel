import './CTA.css';



function CTA({children, }) {
    return (
        <div role='button' className='btn button_frame d-inline-block'>
            <div className='button_text'>{children}</div>
        </div>
    )
};

export default CTA;