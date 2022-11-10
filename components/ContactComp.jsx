import React from 'react';

function ContactComp(props) {
    
    const blue_shade = "#0047ab";
    // const red_shade = "#a80115";


    return (
        <div style={{borderBottom:`2px solid grey`,display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"}}>

            <span style={{textAlign:"center",fontSize:"25px",fontWeight:"550",padding:"20px 0px"}}>CONTACT US</span>

            <div className='contact-1' style={{width:"100%"}}>
                <div style={{width:"100%",height:"100%",border:`2px solid grey`}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.5790832859528!2d80.2693272!3d13.0791273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cb67aa5890e4d9b!2sGS%20Boxing%20Club!5e0!3m2!1sen!2sin!4v1643463817434!5m2!1sen!2sin"
                        title='Loaction'
                        width="100%" 
                        height="100%" 
                        style={{border:0}}
                        allowFullScreen="" 
                        loading="lazy"></iframe>
                </div>
            </div>
            <div className='contact-2' style={{display:"flex",justifyContent:"space-between",alignContent:"center",flexWrap:"wrap"}}>
                
                <div style={{padding:"20px",minHeight:"300px",minWidth:"250px",display:"flex",flexDirection:"column"}}>
                    
                    <span style={{paddingBottom:"20px",width:"fit-content",fontSize:"20px",fontWeight:"750"}}>Contact</span>

                    <a href="tel:+91-80721-76232"><span style={{width:"fit-content",padding:"10px",border:`2px solid ${blue_shade}`,color:"white",cursor:"pointer",backgroundColor:blue_shade,borderRadius:"5px"}}>CALL NOW</span></a>
                    
                    <span style={{paddingTop:"20px",width:"fit-content"}}>080721 76232</span>
                </div>
                
                <div style={{padding:"20px",minHeight:"300px",minWidth:"250px",display:"flex",flexDirection:"column"}}>
                    
                    <span style={{paddingBottom:"20px",width:"fit-content",fontSize:"20px",fontWeight:"750"}}>Address</span>

                    <a href="https://goo.gl/maps/b4PMSYJ518D9r66e6"><span style={{width:"fit-content",padding:"10px",border:`2px solid ${blue_shade}`,color:"white",cursor:"pointer",backgroundColor:blue_shade,borderRadius:"5px"}}>Get Direction</span></a>
                    
                    <span style={{paddingTop:"20px",width:"fit-content",whiteSpace:"wrap"}}>Dy Mayor Kabalamoorthy Salai,<br/> Chintadripet, Chennai,<br/> Tamil Nadu - 600002, <br/>India</span>
                </div>
                
                <div style={{padding:"20px",minHeight:"300px",minWidth:"250px",display:"flex",flexDirection:"column"}}>
                    
                    <span style={{paddingBottom:"20px",width:"fit-content",fontSize:"20px",fontWeight:"750"}}>Business Hours</span>

                    
                    <div style={{paddingTop:"20px",width:"fit-content"}}>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Mon:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Tue:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Wed:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Thu:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Fri:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Sat:</span><span>5:00 – 9:00 AM</span></div>
                        <div style={{minWidth:"150px",display:"flex",justifyContent:"space-between",alignContent:"center",whiteSpace:"nowrap"}}><span>Sun:</span><span>5:00 – 9:00 AM</span></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactComp;