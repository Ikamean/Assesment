import React from 'react'
import {Link} from 'react-router-dom'

const Error = ()=>{
    const style = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center',
        marginTop: '40vh'
    }
    const errStyle = {
        color:'red'
    }
    
    return(
        <div style={style}>
            <h3><span style={errStyle}>Error</span> : Request failed with status code 
            <span style={errStyle}> 404 </span></h3>
            <span className="material-icons md-48">
            data_usage
            </span>
            <h4 >**User Not Found**</h4>
            <div >
                <Link to='/Assesment'>Landing Page</Link>
            </div>
        </div>
    )
}

export default Error