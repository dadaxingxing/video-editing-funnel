import './Proof.css';

function Proof ({children, }) {
    return (

        <div className='outerBox d-inline-block text-align'>
            <div className='innerText'>{children}</div>
        </div>
    )
};

export default Proof;