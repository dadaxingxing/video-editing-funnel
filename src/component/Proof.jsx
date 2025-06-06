import './Proof.css';

function Proof ({children, }) {
    return (

        <div className='outerBox d-flex justify-content-center align-items-center'>
            <div className='innerText'>{children}</div>
        </div>
    )
};

export default Proof;