import React from 'react';

function MainComp(props) {
    
    const red_shade = "#a80115";

    return (
        <div className='main'>
            <div style={{borderBottom:`2px solid grey`,height:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center"}}>
                <span style={{fontFamily:"logo",fontSize:"100px",color:red_shade}}>GS boxing club</span>
                <span style={{paddingTop:"20px"}}>Sports Club in Chennai <br /> Opening at 5:00 AM tomorrow</span>
            </div>
        </div>
    );
}

export default MainComp;