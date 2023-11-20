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


function Portneuf() {

    return (
        <>
            <section className='Gallery'>
                Dewey Lane
            </section>

            <br />

            <section style={Style.Box} className='imageBox'>

                <img src='./images/Portneuf/1.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/8.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/3.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/5.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/6.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/7.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/2.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/9.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/10.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/11.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/12.JPG' style={Style.Images} className='images'></img>
                <img src='./images/Portneuf/13.JPG' style={Style.Images} className='images'></img>

            </section>

        </>

    );
};

export default Portneuf; 