import React from 'react'

const footStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom:'0',
    borderTop: '1px solid #21262d',
    paddingTop : '40px',
    paddingBottom: '8px',
    fontSize: '20px',
    fontWeight: '500px'
}


const Footer = () =>{
    return(
        <div style={footStyle} className='footer'>

                <div>Bitcamp 2020</div>
                
                <div>Omedia Assesment Task</div>
            
            
        </div>
    )

}

export default Footer