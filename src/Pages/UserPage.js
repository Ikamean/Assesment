import React, { useEffect,useState } from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import User from '../components/User'
import Orgs from '../components/orgs'
const UserPage = ({match}) =>{
    const login = match.params.login;
    
    return(
        <div className='UserPage'>

            <div className='backToLanding'>
                <Link to='/Assesment'>Landing Page</Link>
            </div>

            <div>
                
                <User login={login} />
                <Orgs login={login} />
                <Footer />
            </div>

        </div>
    )
}

export default UserPage