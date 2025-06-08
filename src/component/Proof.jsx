import './Proof.css';

function Proof ({children, width='clamp(13rem, 44vw, 22rem)'}) {
    return (

        <div 
            className='outerBox d-flex justify-content-center align-items-center'
            style={{width}}    
        >
            <div className='innerText'>{children}</div>
        </div>
    )
};

export default Proof;