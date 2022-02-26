import { useEffect, useState } from 'react'
import Posts from '../../components/posts/Posts'

import './home.css'
import axios from 'axios'
//import { axiosInstance } from '../../config'

export default function Home() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {  
            const res = await axios.get("/posts")  
            setPosts(res.data)  
        }
        
        fetchPosts()  
    })  

    return (
        <>
            <h1 className="blogs">Docker & Kubernetes</h1>                    

            <div className="home">  
                This is the home page of my MERN Application
                <Posts posts={ posts } />  
            </div>           
        </>
    )
}
