import './post.css'
import { Link } from "react-router-dom"


export default function Post({ post }) {  
    return (
        <div className="post">                  
            <div className="postInfo">
                    { post.categories.map(c =>
                        <span className="postCat">{ c }</span>
                    )}
            </div>

            <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
            </Link>
            
            <span className="postDate">{ new Date (post.createdAt).toDateString() }</span>

            <p className="postDesc">{post.desc}</p>
        </div>            
    )
}
