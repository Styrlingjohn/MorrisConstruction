import React from 'react';


const Style = {
    Box: {
        'display': 'flex',
        'margin': 'auto',
        'backgroundColor': 'white',
        'flexWrap': 'wrap',
        'width': '80%',
        'alignItems': 'center',
    },

    Images: {
        'margin': 'auto',
        'height': '80%',
        'display': 'flex',
        'flexWrap': 'wrap',
        'justifyContent': 'space-around',
        'paddingTop': '10px',
        'paddingBottom': '10px',
    },
}


function DeweyLn() {

    return (
        <>
            <section className='Gallery'>
                Dewey Lane
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>

                <img src='./images/DeweyLn/1.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/8.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/2.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/5.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/6.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/7.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/3.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/9.JPG' style={Style.Images} className='images'></img>
                <img src='./images/DeweyLn/4.JPG' style={Style.Images} className='images'></img>
                
            </section>

        </>

    );
};

export default DeweyLn; 