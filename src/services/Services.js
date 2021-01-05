import Axios from 'axios';





const baseUrl = 'https://api.github.com/users'
const token = process.env.REACT_APP_TOKEN;
console.log('token',token);
const header = {
    'Authorization' : `Token ${token}`
}


const getData =()=> Axios.get(baseUrl,
    {
        method : 'GET',
        headers : header
    }
    )



const getUser = login => Axios.get(`${baseUrl}/${login}`,{
    method : 'GET',
    headers : header
})


const getRepos = login => Axios.get(`${baseUrl}/${login}/repos`,{
    method : 'GET',
    headers : header
})

const getOrgs = (login) => Axios.get(`${baseUrl}/${login}/orgs`,{
    method : 'GET',
    headers : header
})

export default {getData,getUser,getRepos,getOrgs}