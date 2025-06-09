import './BeehiveForm.css' ;


const BeehiivForm = () => {
    return (
        <div className='sub_button'>
            <iframe
                src="https://embeds.beehiiv.com/ac2db25e-2eae-4d38-899f-024abd6f0ffa?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                frameBorder="0"
                scrolling="no"
                style={{
                    margin: 0,
                    borderRadius: '0px !important',
                    backgroundColor: 'transparent',
                }}
                title="Beehive Embed"
            ></iframe>
        </div>
    );
};

export default BeehiivForm;
