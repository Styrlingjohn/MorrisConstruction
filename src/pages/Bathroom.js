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


function Bathroom() {

  return (
    <div>
      <section className='flexbox'>
        Bathroom's
      </section>

      <section style={Style.Box}>
     
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
          <img src='./images/bathroom.jpg' style={Style.Images} className='images'></img>
    
      </section>


    </div>
  );
};

export default Bathroom; 