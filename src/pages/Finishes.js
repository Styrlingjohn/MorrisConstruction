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


function Finishes() {

  return (
    <div>
      <section className='flexbox'>
          Finishes
      </section>

      <br/>

      <section style={Style.Box} className='imageBox'>

          <img src='./images/Lava Finish.jpg' style={Style.Images} className='images'></img>
          <img src='./images/Lava Finish.jpg' style={Style.Images} className='images'></img>
          <img src='./images/Lava Finish.jpg' style={Style.Images} className='images'></img>
          <img src='./images/Lava Finish.jpg' style={Style.Images} className='images'></img>

      </section>
    </div>
  );
};

export default Finishes; 