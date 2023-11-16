import React from 'react';


const Style = {
  Box: {
    'display': 'flex',
    'margin': 'auto',
    'border': '1px solid',
    'backgroundColor': 'grey',
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


function SHHouse() {

  return (
    <>
      <section className='flexbox'>
          Kitchen's
      </section>

      <br/>

      <section style={Style.Box} className='imageBox'>

          <img src='./images/SornsenHouse/1.jpg' style={Style.Images} className='images'></img>
          <img src='./images/SornsenHouse/2.jpg' style={Style.Images} className='images'></img>
          <img src='./images/SornsenHouse/3.jpg' style={Style.Images} className='images'></img>

      </section>

    </>

  );
};

export default SHHouse; 