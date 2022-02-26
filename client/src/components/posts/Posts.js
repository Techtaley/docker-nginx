import Post from '../post/Post'
import './posts.css'
import dotenv from "dotenv"

dotenv.config()

export default function Posts({ posts }) {
    return (
        <>            
            <div className="posts">
                These are posts.
                { posts.map(p => (   //gets each instance of post and display on homepage 
                    <Post post={p} />
                ))}	                  
            </div>        
        </>

    )
}
