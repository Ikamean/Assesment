import React, { useEffect,useState } from 'react'
import Services from '../services/Services'


const Orgs = ({login})=>{
   const [ orgsArr, setOrgsArr ] = useState([])

    const getDetails = () =>{
        Services.getOrgs(login).
        then(response=>setOrgsArr(response.data))
    }

    useEffect(()=>{
        getDetails()
    },[])
    
    
   if(orgsArr.length === 0){
    return(
        <div key='not Member'>
        <h3>Not member of any organisation</h3>
        </div>
    )
   }  
    return(
     <div className='organisationArray'>
    {orgsArr.map(
        (org,i)=>
                
            <div key={i} className='organisation'>
                <img src={org.avatar_url} alt='organisation avatar' className='orgsAvatar' />
                <a href={`https://github.com/${org.login}`} target='_blank'>{org.name||org.login}</a>
            </div>
                
    )}
    </div>)
}
    

export default Orgs