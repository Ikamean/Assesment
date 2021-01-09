import React, {useState,useEffect} from 'react';
import Services from '../services/Services';
import User from '../components/User';
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Landing = () =>{
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState('')
    const [ notFound, setNotFound ] = useState(false)
    const [ grid, setGrid ] = useState(false)
    
    // handle search input
    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }


    // changing Grid to List
    const changeView = () =>{
        setGrid(!grid)
    }


    // Axios.get(baseUrl) ---> get all data
    const getLogin = () =>{
        Services.getData()
        .then(response=>setUsers(response.data))
        .catch(()=>setNotFound(true))
        
    }

    

    useEffect(()=>{
    const getUserApi = () =>{
        Services.getUser(search)
        .then(()=>{
            setNotFound(false)
        })
        .catch(()=>{
            setNotFound(true);
        });  
    }
        getUserApi()
        
    } ,[search])
    

    useEffect(()=>
        getLogin()
        ,[])

  
    return(
        <div className='LandingPage'>
            <div className='SearchBox'>
                
                    <div className="Search" >
                        
                        <div className='searchIcon'>
                            <span className="material-icons">
                            search
                            </span>
                            <input  className='inputBox' type='search' placeholder='Username' value={search} onChange={handleSearch} />       
                            
                        </div>
                        
                        <div className='searchButton'>
                            <Link to={notFound?'/404' : `/${search}` } 
                            className='searchLink' >Search User</Link>
                        </div>
                    </div>

                    <div >
                    <button className="gridButton" onClick={changeView}>
                    {grid?
                        <span className="material-icons">
                        list
                        </span>
                        :
                        <span className="material-icons">
                            grid_on
                        </span>
                        
                    }
                    </button>
            </div>
                </div>
            <div >
                
            

                <div className='popularUsers'>
                    <h2>Popular Users</h2>
                </div>
         
                    <div className={grid? 'gridView' : 'listView'} >
                        {users.map((user,i)=>
                            <div className='LandingUser' key={i}>
                                <User  login={user.login} />
                            </div>
                                )}
                    </div>
                        
            </div>

            <div>
                    <Footer />  
            </div> 

        </div>
    )
}

export default Landing