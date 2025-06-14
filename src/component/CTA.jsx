import './CTA.css';
import { useState, useEffect, useRef } from 'react';



function CTA({children, height='2.5rem', width='5.6rem', radius='.25rem', font_size='1.25rem'}) {
    const [showForm, setShowForm] = useState(false);
    const iframeRef = useRef(null);
    useEffect(() => {
        if (!showForm || !iframeRef.current) return;

        const queryParams = window.location.search;
        iframeRef.current.src = `https://tally.so/r/mR6Vo4${queryParams}`;
    }, [showForm]);
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.handleKeyDown === 'escape'){
                setShowForm(false);
                if (window.history.state?.modalOpen) {
                    window.history.back();
                }
            }
        };

        const handlePopState = () => {
            setShowForm(false);
        };

        if (showForm) {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('popstate', handlePopState);
            window.history.pushState({ modalOpen: true }, '');
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('popstate', handlePopState);
        };
    }, [showForm]);
        
    return (
        <>
            <div 
                role='button' 
                className='btn button_frame d-flex justify-content-center align-items-center' 
                onClick={() => setShowForm(true)}
                style={{
                    height,
                    width,
                    borderRadius: radius,
                    fontSize: font_size,
                }}
            >
                <div className='button_text'>{children}</div>
            </div>

            {showForm && (
                <div
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 9999,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                }}
                >
                    {/* <div 
                        className='btn button_frame d-flex justify-content-center'
                        onClick={() => setShowForm(false)}
                        style={{
                            height,
                            width,
                            borderRadius: radius,
                            fontSize: font_size,
                        }}
                    >
                        close
                    </div> */}
                    <iframe
                        ref={iframeRef}
                        title="Free video editing quota"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: '0',
                        }}
                    />
                </div>
            )}
        </>
    )
};

export default CTA;