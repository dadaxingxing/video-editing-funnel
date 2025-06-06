import './Cards.css';


function Cards ({title, paragraph}) {
    return (
        <div className='cardFrame d-flex flex-column align-items-center justify-content-start'>

            <div className='seperator'>
                <div className='title'>{title}</div>
                <div className='line'></div>
            </div>

            <div className='paragraph'>{paragraph}</div>
        </div>
    )
};

export default Cards;