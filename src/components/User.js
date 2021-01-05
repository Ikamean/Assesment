import React, { useEffect, useState } from 'react';
import Services from '../services/Services';
import {Link} from 'react-router-dom'

const User = ({login}) =>{

    const [ userData, setUserData ] = useState([])
    const [ repos, setRepos ] = useState ([])
    
    const getData = () =>{
        Services.getUser(login)
        .then(response=>setUserData(response.data))
    }

    const getRepos = () =>{
        Services.getRepos(login).
        then(response=>setRepos(response.data))
    }

    useEffect(()=>{
        getData()
        getRepos()
    },[])
        
    const reposArr = repos.map(repo=>repo.name)
    const repoUrl = repos.map(url=>url.html_url)
    
    if(reposArr.length){
        reposArr.splice(3)
        repoUrl.splice(3)
    }
    const repoPage = []

    for(let i =0; i<3; i++){
        repoPage.push({
            name: reposArr[i],
            url : repoUrl[i]
        })
    }
    


    return(
        <div className='userDetails' >
            <div className='NameLink'>
                <Link to={`/Assesment/${userData.login}`} className='userLink'>{userData.name? userData.name : userData.login} </Link>
            </div>
            <div >
                <h4 className='userType'>
                    <div className='type'> 
                        <span className="material-icons " >
                            account_box
                        </span>
                        {userData.type}</div> 
                    <div className='login'>
                        <span>Github : </span> 
                        <a href={userData.html_url} target='_blank' >{userData.login} </a> 
                    </div>
                </h4>
                <img  src={userData.avatar_url} alt='user avatar'/>
                {
                reposArr.length>0?
                    <div className='repoDiv' >
                    <ul> 
                        <div className='reposList'>
                        {repoPage.map((repo,i)=>

                            <div key={i}>

                                <li  >
                                    
                                    <span className="material-icons codeIcon" >
                                        code
                                    </span>

                                    <a href={repo.url} target='_blank' >
                                        {repo.name}
                                    </a>

                                </li>

                            </div>
                            )}
                        </div>  
                    </ul>
                    </div>
                :
                    <div>
                        <span className="material-icons codeIcon" >
                                        code
                        </span>
                        No Repositories
                    </div>
                }
                
            </div>     
        </div>
    )
}

export default User